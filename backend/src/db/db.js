import mongoose from "mongoose";

const DB_URI = process.env.DB_URI;
const DB_NAME = "bmdu_crud_test";

export const connectDB = async () => {
  try {
    await mongoose.connect(`${DB_URI}/${DB_NAME}`);
    console.log("DB connected");
  } catch (error) {
    console.error("DB connection Error:", error.message);
    console.error(error);
  }
};
