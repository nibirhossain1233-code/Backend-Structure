const express = require("express");
const dbConnect = require("./config/db");
const app = express();
dbConnect()
app.use(express.json())

module.exports = app;