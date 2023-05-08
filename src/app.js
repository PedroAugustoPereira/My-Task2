const express = require("express");
const app = express();

//middlewars que permite o express interpretar json
app.use(express.json());

module.exports = app;