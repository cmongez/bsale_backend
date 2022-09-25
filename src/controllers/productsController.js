const ProductsService = require('../services/productsService.js');

const service = new ProductsService();

const getAllProducts = async (req, res, next) => {
  try {
    const products = await service.getAllProducts();
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllProducts };
