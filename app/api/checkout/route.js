import { getStripe } from "@/app/lib/stripe";
import { getRobotBySlug } from "@/app/lib/robots";

export async function POST(req) {
  const { slug, hours = 1, success_url, cancel_url } = await req.json();
  const robot = getRobotBySlug(slug);
  if (!robot) return new Response("Not found", { status: 404 });

  const stripe = getStripe();

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: `${robot.name} (${robot.model})`,
            images: [new URL(robot.image, process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").toString()],
          },
          unit_amount: robot.price * 100, // per hour USD cents
        },
        quantity: hours,
      },
    ],
    success_url: success_url || `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/?status=success`,
    cancel_url: cancel_url || `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/?status=cancel`,
    metadata: { slug, hours: String(hours) },
  });

  return Response.json({ id: session.id, url: session.url });
}


