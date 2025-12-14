import express from "express";
import sum from "./sum.js";

const app = express();
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server : http://localhost:${PORT}`);
})

app.get("/home", (req, res) => {
  res.json({
    message : "I am root!"
  });
})

app.get("/getSum/:x/:y", async (req, res) => {

  const {x, y} = req.params;
  res.json({
    Answer : sum(parseInt(x), parseInt(y))
  })
})