const knex = require('../config/databaseConfig.js');

class ProductsService {
  constructor() {
    this.knex = knex;
  }

  async getAllProducts() {
    try {
      return await this.knex.from('product').select('*');
    } catch (error) {
      throw error;
    }
  }
  async getProductsByPagination(page) {
    try {
      await console.log('hola', page);
      return await this.knex.from('product').paginate({
        perPage: 10,
        currentPage: page,
      });
    } catch (error) {
      throw error;
    }
  }
  async searchProducts(products) {
    try {
      return await this.knex.from('product').whereRaw('LOWER(name) LIKE ?', '%' + products.toLowerCase() + '%');
    } catch (error) {
      throw error;
    }
  }
  async getProductsByCategory(id) {
    try {
      return await this.knex.from('product').where({ category: `${id}` });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductsService;
