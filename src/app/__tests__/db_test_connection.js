require('dotenv').config();
//conexion a la base de datos
const client = require("../../libs/database/db");

test('Debería conectar a la base de datos y devolver la hora actual', async () => {
  try {
    await client.connect();
    const result = await client.query('SELECT NOW()');
    expect(result).toBeDefined();
    expect(result.rows).toHaveLength(1);
    expect(result.rows[0].now).toBeDefined();
  } finally {
    await client.end();
  }
}, 5000); // Aumenta el tiempo de espera de la prueba