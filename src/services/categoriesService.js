const knex = require('../config/databaseConfig.js');

class CategoriesService {
  constructor() {
    this.knex = knex;
  }

  async getAllCategories() {
    try {
      return this.knex.from('category').select('*');
    } catch (error) {
      throw error;
    }
  }

  async searchCategories(categories) {
    try {
      return await this.knex.from('category').whereRaw('LOWER(name) LIKE ?', '%' + categories.toLowerCase() + '%');
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CategoriesService;
