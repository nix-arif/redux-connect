const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/login", (req, res) => {
  res.json({ username: "Your name here" });
});

app.listen(3001);
