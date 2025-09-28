import { getRedis } from "@/app/lib/upstash";
import { hashPassword, createSession } from "@/app/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  const { email, password } = await req.json();
  if (!email || !password) return new Response("Missing fields", { status: 400 });
  const redis = getRedis();
  const key = `user:${email.toLowerCase()}`;
  const existing = await redis.get(key);
  if (existing) return new Response("User exists", { status: 409 });
  const pw = await hashPassword(password);
  const user = { id: crypto.randomUUID(), email, pw };
  await redis.set(key, user);
  await createSession(user.id);
  return Response.json({ ok: true, user: { id: user.id, email: user.email } });
}


