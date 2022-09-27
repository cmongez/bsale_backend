const categoriesRouter = require('./categories.js');
const productsRouter = require('./products.js');

const router = require('express').Router();

const routerApi = (app) => {
  app.use('/v1', router);
  app.get('/', (req, res) => {
    res.json({
      msg: 'bsale_test by César Mongez',
      linkedIn: 'https://www.linkedin.com/in/cmongez/',
      portfolio: 'https://cmongez.github.io/portafolio/',
      github: 'https://github.com/cmongez',
    });
  });
  router.use('/categories', categoriesRouter);
  router.use('/products', productsRouter);
};
module.exports = routerApi;
