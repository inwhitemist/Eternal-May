export type EventItem = {
  id: string;
  date: string; // ISO 8601: YYYY-MM-DD
  title: string;
  description?: string;
  tags: string[];
  color?: string;
  emoji?: string; // устар.
  imageData?: string;
};
