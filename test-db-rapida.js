require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  host: process.env.PGHOST ,
  user: process.env.PGUSER ,
  password: process.env.PGPASSWORD ,
  database: process.env.PGDATABASE ,
  port: process.env.PGPORT
});

async function testConnection() {
  try {
    await client.connect();
    console.log("Conexión exitosa a PostgreSQL");

    const result = await client.query('SELECT NOW()');
    console.log('Hora actual en la base de datos:', result.rows[0]);

    await client.end();
  } catch (err) {
    console.error('Error al conectar a PostgreSQL:', err);
  }
}

testConnection();