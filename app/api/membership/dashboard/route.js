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
  if (!profile) return new Response("Profile required", { status: 403 });

  // Basic dashboard summary; expand as needed
  const bookings = (await redis.get(`bookings:${userId}`)) || [];
  const stats = { totalBookings: bookings.length };
  return Response.json({ profile, stats, bookings });
}


