import mongoose from "mongoose";

// name, description, price, category,
// stock, imageUrl

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
