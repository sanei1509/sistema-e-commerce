const pool = require('../infraestructure/database/db');

afterAll(async () => {
  await pool.end(); // Cierra todas las conexiones cuando las pruebas terminan.
});

test('Debería conectar a la base de datos y devolver la hora actual', async () => {
  const result = await pool.query('SELECT NOW()');
  expect(result).toBeDefined(); // Verifica que hay un resultado.
  expect(result.rows).toHaveLength(1); // Verifica que hay una fila de resultado.
  expect(result.rows[0].now).toBeDefined(); // Verifica que la columna 'now' existe.
});