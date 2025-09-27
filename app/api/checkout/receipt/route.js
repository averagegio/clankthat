import { getStripe } from "@/app/lib/stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");
    if (!sessionId) return new Response("Missing session_id", { status: 400 });

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["payment_intent.charges"],
    });

    let receiptUrl = null;
    const pi = session.payment_intent;
    if (pi && typeof pi === "object" && pi.charges?.data?.length) {
      receiptUrl = pi.charges.data[0]?.receipt_url || null;
    } else if (typeof pi === "string") {
      const intent = await stripe.paymentIntents.retrieve(pi, {
        expand: ["charges"],
      });
      receiptUrl = intent.charges?.data?.[0]?.receipt_url || null;
    }

    return Response.json({ receipt_url: receiptUrl });
  } catch (err) {
    console.error("/api/checkout/receipt error", err);
    return new Response("Receipt error", { status: 500 });
  }
}


