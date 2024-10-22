const { Client } = require('pg');

const client = new Client({
  host: process.env.PGHOST || 'localhost',
  user: process.env.PGUSER || 'santi',
  password: process.env.PGPASSWORD || 'root',
  database: process.env.PGDATABASE || 'db_tienda',
  port: process.env.PGPORT || 5431,
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