// app.js
const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const chatRoutes =  require("./routes/chatRoutes.js");


require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoutes);
app.use("/api/products", productRoutes);

module.exports = app;
