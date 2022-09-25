const { Router } = require('express');
const route = Router();

const { getAllCategories, searchCategories } = require('../../controllers/categoriesController.js');

route.get('/', getAllCategories);
route.get('/:categories', searchCategories);

module.exports = route;
