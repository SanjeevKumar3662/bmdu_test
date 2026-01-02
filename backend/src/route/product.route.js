import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import {
  createProduct,
  getAllProducts,
  getProduct,
} from "../controller/product.controller.js";

const router = Router();

router.post("/products", asyncHandler(createProduct));
router.get("/products", asyncHandler(getAllProducts));
router.get("/products/:id", asyncHandler(getProduct));

export default router;
