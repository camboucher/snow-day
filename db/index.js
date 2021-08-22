cont pg = require('pg');

const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'camboucher',
  host: 'localhost',
  database: 'snowday',
  port: 5432,
});

pool.connect();

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}