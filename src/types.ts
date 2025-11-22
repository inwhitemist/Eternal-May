export type EventItem = {
  id: string;
  date: string; // ISO 8601: YYYY-MM-DD
  title: string;
  description?: string;
  tags: string[];
  color?: string;
  emoji?: string; // устар.
  imageData?: string;
  code?: string | null;
  chatId?: string | null;
  chatMessageIds?: string[];
  chatRange?: { fromId?: string; toId?: string };
};

export type ChatMessage = {
  chatId: string;
  messageId: string;
  author: string;
  sentAt: string;
  content?: string;
  sourceFile?: string;
};
