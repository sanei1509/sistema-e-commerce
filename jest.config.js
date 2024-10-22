// jest.config.js
module.exports = {
  testEnvironment: 'node', // Asegura que Jest corra en un entorno Node.js, ideal para pruebas de backend.
  transform: {},
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1', // Si quieres usar paths más simples para importar.
  },
};