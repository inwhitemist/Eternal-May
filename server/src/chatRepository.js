import fs from "node:fs/promises";
import path from "node:path";
import { z } from "zod";

const messageSchema = z.object({
  chatId: z.string(),
  messageId: z.string(),
  author: z.string(),
  sentAt: z.string(),
  content: z.string().optional().default(""),
  sourceFile: z.string(),
});

const chatSchema = z.object({
  chatId: z.string(),
  messages: z.array(messageSchema),
  index: z.object({
    byId: z.record(z.number()).optional().default({}),
    byDate: z.array(z.object({ messageId: z.string(), sentAt: z.string() })).optional().default([]),
  }),
});

export class ChatRepository {
  constructor(baseDir, logger = console) {
    this.baseDir = baseDir;
    this.cache = new Map();
    this.logger = logger;
  }

  async load(chatId) {
    if (this.cache.has(chatId)) return this.cache.get(chatId);
    const filePath = path.join(this.baseDir, `${chatId}.json`);
    try {
      const raw = await fs.readFile(filePath, "utf8");
      const data = chatSchema.parse(JSON.parse(raw));
      this.cache.set(chatId, data);
      return data;
    } catch (e) {
      this.logger.error(`Chat archive not found or invalid for ${chatId}:`, e.message || e);
      return null;
    }
  }

  async getSlice(chatId, params = {}) {
    const chat = await this.load(chatId);
    if (!chat) return null;
    const { fromId, toId, fromDate, toDate, limit } = params;
    const messages = chat.messages;
    let start = 0;
    let end = messages.length;

    if (fromId && chat.index.byId[fromId] !== undefined) start = chat.index.byId[fromId];
    if (toId && chat.index.byId[toId] !== undefined) end = chat.index.byId[toId] + 1;

    let slice = messages.slice(start, end);
    if (fromDate || toDate) {
      const fromTs = fromDate ? new Date(fromDate).getTime() : null;
      const toTs = toDate ? new Date(toDate).getTime() : null;
      slice = slice.filter((m) => {
        const ts = new Date(m.sentAt).getTime();
        if (Number.isNaN(ts)) return false;
        if (fromTs !== null && ts < fromTs) return false;
        if (toTs !== null && ts > toTs) return false;
        return true;
      });
    }
    const max = limit ? Number(limit) : 200;
    return slice.slice(0, max > 0 ? max : slice.length);
  }

  async getMessage(chatId, messageId) {
    const chat = await this.load(chatId);
    if (!chat) return null;
    const idx = chat.index.byId[messageId];
    if (idx === undefined) return null;
    return chat.messages[idx];
  }
}
