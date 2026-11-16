require('dotenv').config();
const express = require("express");
const { dbConnect } = require("./config/db");
const app = express();
dbConnect();
const router = require("./router");
app.use(router);
app.use(express.json())


module.exports = app;