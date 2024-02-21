import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("I am the server");
});

app.listen(3000, () => console.log("port listening at 3000"));
