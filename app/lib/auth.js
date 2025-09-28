import crypto from "crypto";
import { cookies } from "next/headers";
import { getRedis } from "@/app/lib/upstash";

const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7; // 7 days

export async function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const derived = crypto.scryptSync(password, salt, 64).toString("hex");
  return `${salt}$${derived}`;
}

export async function verifyPassword(password, stored) {
  const [salt, digest] = (stored || "").split("$");
  if (!salt || !digest) return false;
  const check = crypto.scryptSync(password, salt, 64).toString("hex");
  return crypto.timingSafeEqual(Buffer.from(digest, "hex"), Buffer.from(check, "hex"));
}

export async function createSession(userId) {
  const token = crypto.randomBytes(24).toString("hex");
  const redis = getRedis();
  await redis.set(`session:${token}`, userId, { ex: SESSION_TTL_SECONDS });
  cookies().set("sid", token, { httpOnly: true, path: "/", maxAge: SESSION_TTL_SECONDS, sameSite: "lax", secure: true });
  return token;
}

export async function getSessionUserId() {
  const token = cookies().get("sid")?.value;
  if (!token) return null;
  const redis = getRedis();
  return await redis.get(`session:${token}`);
}

export async function clearSession() {
  const token = cookies().get("sid")?.value;
  if (!token) return;
  const redis = getRedis();
  await redis.del(`session:${token}`);
  cookies().set("sid", "", { httpOnly: true, path: "/", maxAge: 0 });
}


