import mongoose from "mongoose";
const paymentSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      ref: "User",
    },
    items: [{ type: String, required: true }],
    transactionId: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    itemNames: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  }
);
const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;
