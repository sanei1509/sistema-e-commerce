// infraestructure/database/db.js
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.PGHOST || '127.0.0.1',
  user: process.env.PGUSER || 'santi',
  password: process.env.PGPASSWORD || 'root',
  database: process.env.PGDATABASE || 'db_tienda',
  port: process.env.PGPORT || 5431,
});

module.exports = pool;