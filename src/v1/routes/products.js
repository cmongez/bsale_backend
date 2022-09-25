const { Router } = require('express');
const route = Router();
const { getAllProducts, searchProducts } = require('../../controllers/productsController.js');

route.get('/', getAllProducts);
route.get('/:products', searchProducts);

module.exports = route;
