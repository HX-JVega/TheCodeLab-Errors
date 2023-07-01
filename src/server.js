const express = require("express");
const morgan = require("morgan");
const resError = require("./utils/resError");

const server = express();
server.use(morgan("dev"));
server.use(express.json());

server.use(require("./routes"));

server.use((err, req, res, next) => {
  const { statusCode, message } = err;
  resError(res, statusCode, message);
});

module.exports = server;
