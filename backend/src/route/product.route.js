import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import {
  createProduct,
  getAllProducts,
} from "../controller/product.controller.js";

const router = Router();

router.post("/products", asyncHandler(createProduct));
router.get("/products", asyncHandler(getAllProducts));

export default router;
