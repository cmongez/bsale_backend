const { Router } = require('express');
const route = Router();
const { getAllProducts, searchProducts, getProductsByCategory } = require('../../controllers/productsController.js');

route.get('/', getAllProducts);
route.get('/:products', searchProducts);
route.get('/category/:id', getProductsByCategory);

module.exports = route;
