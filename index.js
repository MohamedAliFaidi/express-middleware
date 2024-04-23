const express = require("express");

const app = express();

app.use(express.json());

const test = require("./middleware")

app.get("/test",test, async (req, res) => {
  try {
    
    res.status(200).json({ message: "ok" });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(4444, () => {
  console.log("server is up on 4444");
});
