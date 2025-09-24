import Stripe from "stripe";

const cartCheckout = async (req, res) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  let data = req.body;

  try {
    const lineitems = data.map((items) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: items.title,
        },
        unit_amount: Math.round(items.price * 100),
      },
      quantity: items.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineitems,
      mode: "payment",
      success_url: `${process.env.FRONTEND_URL}success/${data[0].userId}`,
      cancel_url: `${process.env.FRONTEND_URL}cancel`,
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    res.status(400).json({ id: error.message });
  }
};

export default cartCheckout;
