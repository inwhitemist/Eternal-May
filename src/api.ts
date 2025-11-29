import { ChatMessage, EventItem } from "./types";
import { isObjectId } from "./utils/isObjectId";

const isLocalhost = typeof window !== "undefined" && window.location.hostname === "localhost";
const API_BASE: string =
  isLocalhost
    ? "http://localhost:8080"
    : (import.meta as any).env?.VITE_API_BASE || "";

export type MeUser = { id: string; email: string; role: "admin" | "user" };
export type AdminUser = { id: string; email: string; role: string; codes: string[] };
export type LegendaryCatalogItem = {
  code: string;
  title: string;
  description: string;
  tags?: string[];
  color?: string | null;
  date?: string | null;
  source: "builtin" | "db";
};

const TOKEN_KEY = "auth-token";
let authToken: string | null =
  typeof window !== "undefined" ? localStorage.getItem(TOKEN_KEY) : null;

export async function http<T = any>(path: string, opts: RequestInit = {}): Promise<T> {
  const headers: Record<string, string> = {
    ...(opts.headers ? (opts.headers as Record<string, string>) : {}),
  };
  if (opts.body !== undefined) headers["Content-Type"] = "application/json";
  if (authToken) headers["Authorization"] = `Bearer ${authToken}`;
  const res = await fetch(API_BASE + path, {
    credentials: "include",
    headers,
    ...opts,
  });
  if (!res.ok) {
    let msg = res.statusText;
    try {
      const j = await res.json();
      if (j?.error) msg = j.error;
    } catch {}
    throw new Error(msg || "request_failed");
  }
  return (await res.json()) as T;
}

export const api = {
  me: () => http<{ user: MeUser }>("/api/me"),
  login: async (email: string, password: string) => {
    const r = await http<{ user: MeUser; token?: string }>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    if (r.token) {
      authToken = r.token;
      if (typeof window !== "undefined")
        localStorage.setItem(TOKEN_KEY, r.token);
    }
    return r;
  },
  logout: async () => {
    const r = await http<{ ok: true }>("/api/auth/logout", { method: "POST" });
    authToken = null;
    if (typeof window !== "undefined")
      localStorage.removeItem(TOKEN_KEY);
    return r;
  },
  register: async (email: string, password: string, accessCode: string, invite?: string) => {
    const payload: any = { email, password, accessCode };
    if (invite) payload.invite = invite;
    const r = await http<{ user: MeUser; token?: string }>("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    if (r.token) {
      authToken = r.token;
      if (typeof window !== "undefined")
        localStorage.setItem(TOKEN_KEY, r.token);
    }
    return r;
  },
  getEvents: () => http<{ events: EventItem[] }>("/api/events"),
  createEvent: (e: EventItem) =>
    http<{ event: EventItem }>("/api/events", {
      method: "POST",
      body: JSON.stringify(e),
    }),
  updateEvent: (id: string, e: EventItem) =>
    http<{ event: EventItem }>(`/api/events/${id}`, {
      method: "PUT",
      body: JSON.stringify(e),
    }),
  deleteEvent: (id: string) => {
    if (!isObjectId(id)) throw new Error("invalid_id");
    return http<{ ok: true }>(`/api/events/${id}`, { method: "DELETE" });
  },
  unlockEvent: (code: string) =>
    http<{ event: EventItem }>("/api/events/unlock", {
      method: "POST",
      body: JSON.stringify({ code }),
    }),
  getUsers: () => http<{ users: AdminUser[] }>("/api/admin/users"),
  grantLegendary: (userId: string, code: string) =>
    http<{ ok: true }>(`/api/admin/users/${userId}/legendary`, {
      method: "POST",
      body: JSON.stringify({ code }),
    }),
  deleteUser: (userId: string) =>
    http<{ ok: true; removedEvents?: number; removedCodes?: number }>(`/api/admin/users/${userId}`, {
      method: "DELETE",
    }),
  revokeLegendary: (userId: string, code: string) =>
    http<{ ok: true }>(`/api/admin/users/${userId}/legendary/${code}`, {
      method: "DELETE",
    }),
  getLegendaryCatalog: () =>
    http<{ catalog: LegendaryCatalogItem[] }>("/api/admin/legendary-catalog"),
  getChatMessages: (chatId: string, fromId?: number | null, toId?: number | null) => {
    const params = new URLSearchParams();
    if (fromId !== undefined && fromId !== null) params.set("fromId", String(fromId));
    if (toId !== undefined && toId !== null) params.set("toId", String(toId));
    const query = params.toString();
    return http<{ messages: ChatMessage[] }>(`/api/chats/${chatId}${query ? `?${query}` : ""}`);
  },
  uploadChatLog: (chatId: string, messages: ChatMessage[]) =>
    http<{ ok: boolean; messages: number }>("/api/admin/chats", {
      method: "POST",
      body: JSON.stringify({ chatId, messages }),
    }),
};
