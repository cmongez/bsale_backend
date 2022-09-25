const e = require('express');
const ProductsService = require('../services/productsService.js');

const service = new ProductsService();

const getAllProducts = async (req, res, next) => {
  try {
    const products = await service.getAllProducts();
    res.status(200).send(products);
  } catch (error) {
    next(error);
  }
};
const searchProducts = async (req, res, next) => {
  try {
    const { products } = req.params;
    const filteredProducts = await service.searchProducts(products);
    res.status(200).send(filteredProducts);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllProducts, searchProducts };
