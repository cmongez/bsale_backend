const CategoriesService = require('../services/categoriesService.js');

const service = new CategoriesService();

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await service.getAllCategories();

    res.status(200).send(categories);
  } catch (error) {
    next(error);
  }
};
const searchCategories = async (req, res, next) => {
  try {
    const { categories } = req.params;
    const filteredCategories = await service.searchCategories(categories);
    res.status(200).send(filteredCategories);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllCategories, searchCategories };
