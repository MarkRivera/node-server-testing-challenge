const express = require("express");
const server = express();
const championRoutes = require("./routes/champions");

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});

server.use("/api/champions", championRoutes);

server.use("/", (error, req, res, next) => {
  console.log(error);
  res.status(500).json({ msg: "There was a server error!" });
});

module.exports = server;
