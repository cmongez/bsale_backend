const categoriesRouter = require('./categories.js');
const productsRouter = require('./products.js');

const router = require('express').Router();

const routerApi = (app) => {
  app.use('/v1', router);
  router.use('/categories', categoriesRouter);
  router.use('/products', productsRouter);
};
module.exports = routerApi;
