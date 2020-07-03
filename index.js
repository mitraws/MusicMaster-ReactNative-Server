// import express:
const express = require("express");

// create express server:
const app = express();

// read request bodies of JSON requests, a.k.a. body-parser:
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

// Listen for connections on specified port (default is port 4000):
const { PORT } = require("./config/constants");

// start listening:
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

