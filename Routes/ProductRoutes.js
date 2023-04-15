import express from "express";
import asyncHandler from "express-async-handler";
import Product from "./../Models/ProductModel.js";
import protect from "../middleware/AuthMiddleware.js";

const productRoute = express.Router();
// get all products
productRoute.get(
  "",
  asyncHandler(async (req, res) => {
    const pageSize = 6;
    const page = Number(req.query.pageNumber) || 1;
    const search = req.query.search
      ? {
          name: {
            $regex: req.query.search,
            $options: "i",
          },
        }
      : {};

    const count = await Product.countDocuments({ ...search });
    const products = await Product.find({ ...search })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort({ _id: -1 });
    res.json({ products, page, pages: Math.ceil(count / pageSize) });
  })
);
// get a single product
productRoute.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);
// add review
productRoute.post(
  "/:id/review",
  protect,
  asyncHandler(async (req, res) => {
    const { rating, comment } = req.body.review;
    const product = await Product.findById(req.params.id);
    if (product) {
      const alreadyReviewed = product.reviews.find(
        (r) => r.user.toString() === req.user._id.toString()
      );
      if (alreadyReviewed) {
        res.status(400);
        throw new Error("Product already reviewed");
      }
      const review = {
        name: req.user.name,
        rating: Number(rating),
        comment,
        user: req.user._id,
      };
      product.reviews.push(review);
      product.numReviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length;
      await product.save();
      res.status(201).json({
        message: "Review Added",
      });
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);
export default productRoute;
