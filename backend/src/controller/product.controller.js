import mongoose from "mongoose";
import { ApiError } from "../utils/apiError.js";

// name, description, price, category,
// stock, imageUrl
export const createProduct = async (req, res) => {
  const { name, description, price, category, stock, imageUrl = "" } = req.body;
  console.log("body:", name, description, price, category, stock, imageUrl);

  if (!(name && description && price && category && stock)) {
    throw new ApiError(400);
  }
};
