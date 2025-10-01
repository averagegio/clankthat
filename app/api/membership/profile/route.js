import { getRedis } from "@/app/lib/upstash";
import { getSessionUserId } from "@/app/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function profileKey(userId) {
  return `profile:${userId}`;
}

export async function GET() {
  const userId = await getSessionUserId();
  if (!userId) return new Response("Unauthorized", { status: 401 });
  const redis = getRedis();
  const profile = await redis.get(profileKey(userId));
  return Response.json({ profile: profile || null });
}

export async function POST(req) {
  const userId = await getSessionUserId();
  if (!userId) return new Response("Unauthorized", { status: 401 });
  const redis = getRedis();
  const body = await req.json().catch(() => ({}));
  const { displayName, bio } = body;
  if (!displayName) return new Response("Missing displayName", { status: 400 });
  const profile = { userId, displayName, bio: bio || "" };
  await redis.set(profileKey(userId), profile);
  return Response.json({ ok: true, profile });
}


