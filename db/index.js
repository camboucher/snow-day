const pg = require('pg');

const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'ec2-3-134-86-209.us-east-2.compute.amazonaws.com',
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