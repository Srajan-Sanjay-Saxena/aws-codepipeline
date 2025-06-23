const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.post("/echo", (req, res) => {
  res.json({ youSent: req.body });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
