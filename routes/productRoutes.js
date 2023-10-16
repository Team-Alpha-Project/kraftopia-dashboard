import express from "express";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productImageController,
  updateProductController,
} from "../controllers/productController.js";
import { requireSignIn } from "../middelwares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  formidable(),
  createProductController
);
//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  formidable(),
  updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get Image
router.get("/product-image/:pid", productImageController);

//delete rproduct
router.delete("/product/:pid", deleteProductController);

export default router;