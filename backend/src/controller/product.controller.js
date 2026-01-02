import { Product } from "../model/product.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";

// name, description, price, category,
// stock, imageUrl
export const createProduct = async (req, res) => {
  const { name, description, price, category, stock, imageUrl = "" } = req.body;
  console.log("body:", name, description, price, category, stock, imageUrl);

  if (!(name && description && price && category && stock)) {
    throw new ApiError(400, `All feilds are requeried except imageUrl`);
  }

  const isProductDuplicate = await Product.findOne({
    name,
    description,
    category,
  });

  if (isProductDuplicate) {
    console.log(isProductDuplicate);
    throw new ApiError(400, "Duplicate product, Already exist in database");
  }

  const product = await Product.create({
    name,
    description,
    price,
    category,
    stock,
    imageUrl,
  });

  if (!product) {
    throw new ApiError(
      500,
      "Failed to create this product / try again sometime later"
    );
  }

  return res.status(201).json(new ApiResponse(201, "Product Created", product));
};

export const getAllProducts = async (req, res) => {
  const allProducts = await Product.find({});

  return res.status(200).json(new ApiResponse(200, "Success", allProducts));
};
