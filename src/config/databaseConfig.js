const dotenv = require('dotenv');
dotenv.config();
const { attachPaginate } = require('knex-paginate');
attachPaginate();
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  pool: {
    min: 0,
    max: 7,
    propagateCreateError: false,
  },
});

module.exports = knex;
