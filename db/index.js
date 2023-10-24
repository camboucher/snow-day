import { DB_CONFIG } from '../config.js';

const {user, host, database, password, port } = DB_CONFIG
const pg = require('pg');

const { Pool, Client } = require('pg');

const pool = new Pool({
  user,
  host,
  database,
  password,
  port,
});

pool.connect();

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}