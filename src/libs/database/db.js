const { Client } = require('pg');

const client = new Client({
  host: process.env.PGHOST || 'localhost',
  user: process.env.PGUSER || 'santi',
  password: process.env.PGPASSWORD || 'root',
  database: process.env.PGDATABASE || 'db_tienda',
  port: process.env.PGPORT || 5431,
});

module.exports = client;
