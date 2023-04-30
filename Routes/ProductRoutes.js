import express from "express";
import asyncHandler from "express-async-handler";
import Product from "./../Models/ProductModel.js";
import { admin, protect } from "../middleware/AuthMiddleware.js";

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

// admin get all products without search and pagination
productRoute.get(
  "/all",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const products = await Product.find({}).sort({ _id: -1 });
    res.json(products);
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

// delete a single product
productRoute.delete(
  "/:id",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.remove();
      res.json({ message: "Product deleted successfully" });
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

// add new product
productRoute.post(
  "/",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const { name, image, price, description, countInStock } = req.body;
    const isProductExist = await Product.findOne({ name });
    if (isProductExist) {
      res.status(400);
      throw new Error("Product Already Exist");
    } else {
      const product = new Product({
        name,
        image,
        price,
        description,
        countInStock,
        user: req.user._id,
      });
      if (product) {
        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
      } else {
        res.status(400);
        throw new Error("Invalid Product Information");
      }
    }
  })
);

// update product
productRoute.put(
  "/:id",
  // protect,
  // admin,
  asyncHandler(async (req, res) => {
    console.log(req);
    const { name, image, price, description, countInStock } = req.body;
    const product = await Product.findById(req.params.id);
    if (product) {
      product.name = name || product.name;
      product.image = image || product.image;
      product.price = price || product.price;
      product.description = description || product.description;
      product.countInStock = countInStock || product.countInStock;

      const updateProduct = await product.save();
      res.json(updateProduct);
    } else {
      res.status(400);
      throw new Error("product not found");
    }
  })
);
export default productRoute;
