import { configDotenv } from "dotenv";
configDotenv();

import express from "express";
import cors from "cors";
import { connectDB } from "./db/db.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hi");
});

await connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
