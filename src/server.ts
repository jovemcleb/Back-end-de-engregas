import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Hello world!" });
});

app.listen(3000, () => console.log("server listening on port 3000"));
