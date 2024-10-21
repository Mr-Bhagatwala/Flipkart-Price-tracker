const express = require('express');
const { fetchProduct, getProducts, recheckPrice } = require('../controllers/productController');
const router = express.Router();

router.post('/fetchProduct', fetchProduct);
router.get('/', getProducts);
router.post('/recheckPrice', recheckPrice);

module.exports = router;
