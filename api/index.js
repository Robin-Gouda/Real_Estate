import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log(`connected to DB!`);
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("I am the server");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
