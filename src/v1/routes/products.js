const { Router } = require('express');
const route = Router();
const { getAllProducts } = require('../../controllers/productsController.js');

route.get('/', getAllProducts);

module.exports = route;
