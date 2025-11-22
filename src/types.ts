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
  chatFromId?: number | null;
  chatToId?: number | null;
};

export type ChatMessage = {
  id: number;
  datetime: string;
  author: string;
  text: string;
};
