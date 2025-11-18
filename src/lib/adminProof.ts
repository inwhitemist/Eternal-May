const DEFAULT_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxtjlWULvmdZ0zbhH4pzQ
kclan/YSiL1k68UqIP6hZANOTeCjiyXTpo3MKq4hmJgo0czM76ZMbENePKYMT8Fc
rqr9bigu5fYSt2CR00c7Iyzl7jTsljUS2vdly2dE7cKsdGj+++e843OWsKdB8AvY
WBWI5zuLJuglUBArkQlwQue0eBw7Tmv0wsjMvhT7v5YyTW3bTRq8aX5tz22nx4QZ
6tuv9vVBp1o6tuTgs38GJMmzyTWb5deLJGw/DfTy3XyVx8QujrCUJv80nbcRGJdm
s7D5mMT+Rm8NIsVBZdSeqATLWooKbaAhqyKxPmn3vonMA+qlQgnJICcFHSntBYwq
vwIDAQAB
-----END PUBLIC KEY-----`;

const envKey = (import.meta as any)?.env?.VITE_ADMIN_PROOF_PUBLIC_KEY;
const PUBLIC_KEY_PEM = (envKey ? envKey : DEFAULT_PUBLIC_KEY).replace(/\\n/g, "\n").trim();

const encoder = new TextEncoder();
const decoder = new TextDecoder();
let publicKeyPromise: Promise<CryptoKey> | null = null;

export type AdminProofPayload = {
  uid: string;
  ts: number;
  exp: number;
  nonce: string;
};

function hasWebCrypto() {
  return typeof window !== "undefined" && !!window.crypto?.subtle;
}

function decodeBase64(base64: string): Uint8Array {
  if (typeof atob === "function") {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes;
  }
  throw new Error("Base64 decoding requires browser environment");
}

function uint8ToArrayBuffer(view: Uint8Array): ArrayBuffer {
  const copy = new Uint8Array(view.length);
  copy.set(view);
  return copy.buffer;
}

function base64UrlToUint8Array(base64url: string) {
  let input = base64url.replace(/-/g, "+").replace(/_/g, "/");
  while (input.length % 4) input += "=";
  return decodeBase64(input);
}

function base64UrlToString(base64url: string) {
  return decoder.decode(base64UrlToUint8Array(base64url));
}

function pemToArrayBuffer(pem: string): ArrayBuffer {
  const normalized = pem
    .replace(/-----BEGIN PUBLIC KEY-----/g, "")
    .replace(/-----END PUBLIC KEY-----/g, "")
    .replace(/\s+/g, "");
  const bytes = decodeBase64(normalized);
  return uint8ToArrayBuffer(bytes);
}

async function loadPublicKey(): Promise<CryptoKey | null> {
  if (!PUBLIC_KEY_PEM || !hasWebCrypto()) return null;
  if (!publicKeyPromise) {
    const keyBuffer = pemToArrayBuffer(PUBLIC_KEY_PEM);
    publicKeyPromise = window.crypto.subtle.importKey(
      "spki",
      keyBuffer,
      {
        name: "RSA-PSS",
        hash: "SHA-256",
      },
      true,
      ["verify"]
    );
  }
  return publicKeyPromise;
}

export async function verifyAdminProofToken(
  token: string,
  expectedUid: string
): Promise<AdminProofPayload | null> {
  if (!token || !expectedUid) return null;
  const key = await loadPublicKey();
  if (!key) return null;
  const [payloadB64, signatureB64] = token.split(".");
  if (!payloadB64 || !signatureB64) return null;
  let payloadJson: string;
  let payload: AdminProofPayload;
  try {
    payloadJson = base64UrlToString(payloadB64);
    payload = JSON.parse(payloadJson);
  } catch {
    return null;
  }
  if (payload.uid !== expectedUid) return null;
  if (typeof payload.exp !== "number" || payload.exp < Date.now()) return null;
  const signatureBytes = base64UrlToUint8Array(signatureB64);
  const valid = await window.crypto.subtle.verify(
    { name: "RSA-PSS", saltLength: 32 },
    key,
    uint8ToArrayBuffer(signatureBytes),
    encoder.encode(payloadJson)
  );
  return valid ? payload : null;
}
