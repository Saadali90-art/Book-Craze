import Stripe from "stripe";

const planCheckout = async (req, res) => {
  let stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  let { id } = req.body;

  try {
    let session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: id, quantity: 1 }],
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export default planCheckout;
