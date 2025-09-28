import { getRedis } from "@/app/lib/upstash";
import { verifyPassword, createSession } from "@/app/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  const { email, password } = await req.json();
  if (!email || !password) return new Response("Missing fields", { status: 400 });
  const redis = getRedis();
  const user = await redis.get(`user:${email.toLowerCase()}`);
  if (!user) return new Response("Invalid credentials", { status: 401 });
  const ok = await verifyPassword(password, user.pw);
  if (!ok) return new Response("Invalid credentials", { status: 401 });
  await createSession(user.id);
  return Response.json({ ok: true, user: { id: user.id, email: user.email } });
}


