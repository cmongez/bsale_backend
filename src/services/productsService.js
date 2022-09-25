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
}

module.exports = ProductsService;
