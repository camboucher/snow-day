const pg = require('pg');

const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'camboucher',
  host: 'localhost',
  database: 'snowday',
  password: 'password',
  port: 5432,
});

pool.connect();

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}