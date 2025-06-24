import express from "express"
import Stripe from "stripe"

const STRIPE_KEY = process.env.STRIPE_KEY

const router = express.Router()

const stripe = new Stripe(STRIPE_KEY)

router.post("/payment", async (req, res) => {
  try {
    const charge = await stripe.charges.create({
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    })
    res.status(200).json(charge)
  } catch (err) {
    res.status(400).json({ erro: err.message })
  }
})

export default router
