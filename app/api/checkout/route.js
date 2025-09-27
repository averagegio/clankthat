import { getStripe } from "@/app/lib/stripe";
import { getRobotBySlug } from "@/app/lib/robots";
import { headers } from "next/headers";

export const runtime = "nodejs"; // Stripe requires Node.js runtime (not Edge)
export const dynamic = "force-dynamic"; // avoid caching of responses

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));
    const { slug, hours = 1, success_url, cancel_url } = body;

    if (!slug) {
      return new Response("Missing slug", { status: 400 });
    }
    const robot = getRobotBySlug(slug);
    if (!robot) return new Response("Not found", { status: 404 });

    const stripe = getStripe();
    const hdrs = headers();
    const originFromReq = hdrs.get("origin");
    const site = originFromReq || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${robot.name} (${robot.model})`,
              images: [new URL(robot.image, site).toString()],
            },
            unit_amount: robot.price * 100, // per hour in cents
          },
          quantity: hours,
        },
      ],
      success_url:
        success_url || `${site}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancel_url || `${site}/checkout/cancel`,
      metadata: { slug, hours: String(hours) },
    });

    return Response.json({ id: session.id, url: session.url });
  } catch (err) {
    console.error("/api/checkout error", err);
    return new Response("Checkout error", { status: 500 });
  }
}


