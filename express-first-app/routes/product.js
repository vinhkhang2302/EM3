const express = require('express');
const router = express.Router();
const { getProducts, getProductById } = require('../controller/productControlller.js');

// GET /products      -> product list
router.get('/', getProducts);

// GET /products/:id  -> one product
router.get('/:id', getProductById);

module.exports = router;