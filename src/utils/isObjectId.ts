export function isObjectId(s?: string): s is string {
  return !!s && /^[a-f\d]{24}$/i.test(s);
}
