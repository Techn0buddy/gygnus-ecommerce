const express = require("express");
const router = express.Router();
const { getAllProducts, getProductById, addProduct } = require("../controllers/productController");
const Product = require('../models/Product');

router.get("/", getAllProducts);
router.get("/:id", getProductById);

// Temporary in routes/productRoutes.js
router.post("/", addProduct);

module.exports = router;
