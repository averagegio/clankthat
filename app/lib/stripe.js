import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export function getStripe() {
  if (!stripeSecretKey) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  return new Stripe(stripeSecretKey, {
    apiVersion: "2024-06-20",
    appInfo: { name: "ClankThat", version: "0.1.0" },
  });
}


