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

export const getProduct = async (req, res) => {
  const { id } = req.params;
  console.log("id", id, typeof id);

  if (!id || id === "") {
    throw new ApiError(400, "Product id is required");
  }

  const product = await Product.findById(id);
  if (!product) {
    throw new ApiError(400, "Invalid id or product does not exist anymore");
  }

  return res.status(200).json(new ApiResponse(200, "Success", product));
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category, stock, imageUrl = "" } = req.body;
  // console.log("body:", name, description, price, category, stock, imageUrl);

  if (
    !id ||
    !name ||
    !description ||
    price === undefined ||
    !category ||
    stock === undefined
  ) {
    throw new ApiError(400, `All feilds are requeried except imageUrl`);
  }

  const product = await Product.findByIdAndUpdate(
    id,
    {
      name,
      description,
      price,
      category,
      stock,
      imageUrl,
    },
    { new: true, runValidators: true }
  );

  if (!product) {
    throw new ApiError(400, "Failed to find the product");
  }

  if (!product) {
    throw new ApiError(
      500,
      "Failed to update this product / try again sometime later"
    );
  }

  return res.status(201).json(new ApiResponse(201, "Product Updated", product));
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw new ApiError(200, "Product id is required");
  }

  const isProductExist = await Product.findById(id);

  if (!isProductExist) {
    throw new ApiError(400, "Product does not exist");
  }

  const product = await Product.deleteOne({ _id: id });

  if (!product) {
    throw new ApiError(500, "Failed to delete product / try again later");
  }

  return res.status(200).json(new ApiResponse(200, "Product deleted", product));
};
