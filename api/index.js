import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();
app.use(express.json());
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log(`connected to DB! `);
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT;

app.listen(port, () => console.log(`Server running on port ${port}`));

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
