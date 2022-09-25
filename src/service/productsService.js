const knex = require('../config/databaseConfig.js');

class ProductsService {
  constructor() {
    this.knex = knex;
  }

  async getProducts() {
    try {
      return await this.knex.from('product').select('*');
    } catch (error) {
      console.log(error);
    }
  }
}
