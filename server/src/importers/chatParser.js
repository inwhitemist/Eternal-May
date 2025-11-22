import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import cheerio from "cheerio";
import dayjs from "dayjs";
import iconv from "iconv-lite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "../../");
const DEFAULT_OUTPUT = path.join(projectRoot, "data/chats");

const MONTHS = {
  янв: 0,
  фев: 1,
  мар: 2,
  апр: 3,
  мая: 4,
  май: 4,
  июн: 5,
  июл: 6,
  авг: 7,
  сен: 8,
  окт: 9,
  ноя: 10,
  дек: 11,
};

function parseArgs(argv = process.argv.slice(2)) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    const cur = argv[i];
    if (cur === "--source") args.source = argv[++i];
    else if (cur === "--chat-id") args.chatId = argv[++i];
    else if (cur === "--out") args.outDir = argv[++i];
    else if (cur === "--help") args.help = true;
  }
  return args;
}

function parseDate(str) {
  const match = str
    ?.replace(/\s+/g, " ")
    .trim()
    .match(/(\d{1,2})\s+([а-я]{3})\s+(\d{4})\s+в\s+(\d{2}):(\d{2})(?::(\d{2}))?/i);
  if (!match) return null;
  const [, dRaw, mRaw, yRaw, hh, mm, ssRaw] = match;
  const month = MONTHS[mRaw.toLowerCase()];
  if (month === undefined) return null;
  const date = new Date(Number(yRaw), month, Number(dRaw), Number(hh), Number(mm), Number(ssRaw || 0));
  return date.toISOString();
}

function extractContent($, header) {
  const parts = [];
  let node = header[0]?.nextSibling;
  while (node) {
    if (node.type === "tag" && node.name === "div" && node.attribs?.class?.includes("kludges")) {
      node = node.nextSibling;
      continue;
    }
    if (node.type === "tag") {
      const fragment = $(node).clone();
      fragment.find("div.kludges").remove();
      const text = fragment.text().trim();
      if (text) parts.push(text);
    }
    node = node.nextSibling;
  }
  return parts.join("\n\n");
}

async function parseFile(filePath, chatId) {
  const buf = await fs.readFile(filePath);
  const decoded = iconv.decode(buf, "win1251");
  const $ = cheerio.load(decoded);
  const messages = [];
  $("div.message").each((_, el) => {
    const messageId = $(el).attr("data-id")?.trim();
    if (!messageId) {
      console.warn(`[skip] message without id in ${path.basename(filePath)}`);
      return;
    }
    const header = $(el).find(".message__header").first();
    if (!header || !header.length) {
      console.warn(`[skip] message ${messageId} missing header in ${path.basename(filePath)}`);
      return;
    }
    const headerText = header.text().trim();
    const author = header.find(".message__author").text().trim() || headerText.split("\n")[0]?.trim();
    const dateText = header.find(".message__date").text().trim() || headerText;
    const sentAt = parseDate(dateText);
    if (!sentAt) {
      console.warn(`[skip] message ${messageId} has invalid date (${dateText}) in ${path.basename(filePath)}`);
      return;
    }
    const content = extractContent($, header);
    messages.push({ chatId, messageId, author, sentAt, content, sourceFile: path.basename(filePath) });
  });
  return messages;
}

async function readHtmlFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = entries
    .filter((e) => e.isFile() && e.name.toLowerCase().endsWith(".html"))
    .map((e) => path.join(dir, e.name))
    .sort();
  return files;
}

function buildIndex(messages) {
  const byId = {};
  messages.forEach((m, idx) => {
    byId[m.messageId] = idx;
  });
  const byDate = messages.map((m) => ({ messageId: m.messageId, sentAt: m.sentAt }));
  return { byId, byDate };
}

async function main() {
  const args = parseArgs();
  if (args.help || !args.source || !args.chatId) {
    console.log("Usage: npm run import:chat -- --source <dir> --chat-id <id> [--out <dir>]");
    process.exit(1);
  }
  const srcDir = path.resolve(process.cwd(), args.source);
  const outDir = args.outDir ? path.resolve(process.cwd(), args.outDir) : DEFAULT_OUTPUT;
  await fs.mkdir(outDir, { recursive: true });
  const files = await readHtmlFiles(srcDir);
  if (!files.length) {
    console.error("No HTML files found in", srcDir);
    process.exit(1);
  }
  const messages = [];
  for (const file of files) {
    try {
      const items = await parseFile(file, args.chatId);
      messages.push(...items);
    } catch (e) {
      console.error("Failed to parse", file, e.message);
    }
  }
  messages.sort((a, b) => dayjs(a.sentAt).valueOf() - dayjs(b.sentAt).valueOf() || a.messageId.localeCompare(b.messageId));
  const index = buildIndex(messages);
  const output = { chatId: args.chatId, messages, index };
  const target = path.join(outDir, `${args.chatId}.json`);
  await fs.writeFile(target, JSON.stringify(output, null, 2), "utf8");
  console.log(`Saved ${messages.length} messages to ${target}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
