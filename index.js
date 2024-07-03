import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDB.js";
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";
import stripeRoutes from "./Routes/stripeRoutes.js";

dotenv.config();
connectDatabase();
const app = express();
const port = process.env.PORT || 5000;

// middle wires
app.use(
  cors({
    credentials: true,
    origin: [      
      "https://vite-react-shop.web.app",
      "https://vite-shop-admin.web.app",
      "https://vite-react-shop.web.app",
      "http://localhost:4040"
    ],
  })
);
app.use(express.json());

app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/create-payment-intent", stripeRoutes);
// error handlers
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
