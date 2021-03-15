import config from '../knexfile';

const env = process.env.DB_PORT || 'development';
const knex = require('knex')(config[env]);

module.exports = { knex };
