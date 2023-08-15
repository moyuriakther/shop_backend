import express from "express";
import asyncHandler from "express-async-handler";
import { protect } from "../middleware/AuthMiddleware.js";
import stripe from "stripe";

import dotenv from "dotenv";
import Payment from "../Models/PaymentModel.js";
dotenv.config();
const stripeInstance = stripe(process.env.STRIPE_KEY);
const stripeRouter = express.Router();

stripeRouter.post(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    console.log(req.body);
    const { price } = req.body;
    const amount = price * 100;
    const paymentIntent = await stripeInstance.paymentIntents.create(
      {
        amount: amount,
        currency: "usd",
        payment_method_types: ["card"],
      }
      // (stripeErr, stripeRes) => {
      //   if (stripeErr) {
      //     console.log(stripeErr, "Error");
      //     res.status(500).json(stripeErr);
      //   } else {
      //     console.log("success", stripeRes, "success");
      //     res.status(200).json(stripeRes);
      //   }
      // }
    );
    // console.log({ clientSecret: paymentIntent.client_secret }),
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  })
);
// payment related apis
stripeRouter.post(
  "/payment",
  protect,
  asyncHandler(async (req, res) => {
    const {
      email,
      transactionId,
      price,
      quantity,
      items,
      itemNames,
      currency,
    } = req.body;

    const payment = new Payment({
      email,
      transactionId,
      price,
      quantity,
      items,
      itemNames,
      currency,
    });

    const createPayment = await payment.save();

    res.status(201).json(createPayment);
  })
);
export default stripeRouter;
