import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controller/product.controller.js";

const router = Router();

router.post("/products", asyncHandler(createProduct));
router.get("/products", asyncHandler(getAllProducts));
router.get("/products/:id", asyncHandler(getProduct));
router.patch("/products/:id", asyncHandler(updateProduct));
router.delete("/products/:id", asyncHandler(deleteProduct));

export default router;
