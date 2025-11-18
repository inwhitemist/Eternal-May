import { EventItem } from "./types";
import { isObjectId } from "./utils/isObjectId";
import { verifyAdminProofToken } from "./lib/adminProof";

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

type HttpOptions = RequestInit & { requireAdminProof?: boolean };

const TOKEN_KEY = "auth-token";
let authToken: string | null =
  typeof window !== "undefined" ? localStorage.getItem(TOKEN_KEY) : null;
let adminProofToken: string | null = null;

export async function http<T = any>(path: string, opts: HttpOptions = {}): Promise<T> {
  const { requireAdminProof, ...rest } = opts;
  const headers: Record<string, string> = {
    ...(rest.headers ? (rest.headers as Record<string, string>) : {}),
  };
  if (rest.body !== undefined && !headers["Content-Type"]) headers["Content-Type"] = "application/json";
  if (authToken) headers["Authorization"] = `Bearer ${authToken}`;
  if (requireAdminProof) {
    if (!adminProofToken) throw new Error("admin_proof_missing");
    headers["X-Admin-Proof"] = adminProofToken;
  } else if (adminProofToken && path.startsWith("/api/admin/")) {
    headers["X-Admin-Proof"] = adminProofToken;
  }
  const res = await fetch(API_BASE + path, {
    credentials: "include",
    headers,
    ...rest,
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
    adminProofToken = null;
    return r;
  },
  logout: async () => {
    const r = await http<{ ok: true }>("/api/auth/logout", { method: "POST" });
    authToken = null;
    if (typeof window !== "undefined")
      localStorage.removeItem(TOKEN_KEY);
    adminProofToken = null;
    return r;
  },
  register: async (email: string, password: string, invite?: string) => {
    const payload: any = { email, password };
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
    adminProofToken = null;
    return r;
  },
  getEvents: () => http<{ events: EventItem[] }>("/api/events"),
  createEvent: (e: EventItem) =>
    http<{ event: EventItem }>("/api/events", {
      method: "POST",
      body: JSON.stringify(e),
      requireAdminProof: true,
    }),
  updateEvent: (id: string, e: EventItem) =>
    http<{ event: EventItem }>(`/api/events/${id}`, {
      method: "PUT",
      body: JSON.stringify(e),
      requireAdminProof: true,
    }),
  deleteEvent: (id: string) => {
    if (!isObjectId(id)) throw new Error("invalid_id");
    return http<{ ok: true }>(`/api/events/${id}`, {
      method: "DELETE",
      requireAdminProof: true,
    });
  },
  unlockEvent: (code: string) =>
    http<{ event: EventItem }>("/api/events/unlock", {
      method: "POST",
      body: JSON.stringify({ code }),
    }),
  getUsers: () =>
    http<{ users: AdminUser[] }>("/api/admin/users", { requireAdminProof: true }),
  grantLegendary: (userId: string, code: string) =>
    http<{ ok: true }>(`/api/admin/users/${userId}/legendary`, {
      method: "POST",
      body: JSON.stringify({ code }),
      requireAdminProof: true,
    }),
  revokeLegendary: (userId: string, code: string) =>
    http<{ ok: true }>(`/api/admin/users/${userId}/legendary/${code}`, {
      method: "DELETE",
      requireAdminProof: true,
    }),
  getLegendaryCatalog: () =>
    http<{ catalog: LegendaryCatalogItem[] }>("/api/admin/legendary-catalog", {
      requireAdminProof: true,
    }),
  obtainAdminProof: async (userId: string) => {
    if (!userId) throw new Error("missing_user");
    const r = await http<{ proof: string; expiresIn?: number }>("/api/admin/proof", {
      method: "POST",
    });
    const payload = await verifyAdminProofToken(r.proof, userId);
    if (!payload) throw new Error("admin_proof_invalid");
    adminProofToken = r.proof;
    return { proof: r.proof, expiresIn: r.expiresIn, payload };
  },
  clearAdminProof: () => {
    adminProofToken = null;
  },
  hasAdminProof: () => Boolean(adminProofToken),
};
