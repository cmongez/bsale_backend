const { Router } = require('express');
const route = Router();
const {
  getAllProducts,
  searchProducts,
  getProductsByCategory,
  getProductsByPagination,
} = require('../../controllers/productsController.js');

route.get('/', getAllProducts);
route.get('/:products', searchProducts);
route.get('/category/:id', getProductsByCategory);
route.get('/page/:page', getProductsByPagination);

module.exports = route;
