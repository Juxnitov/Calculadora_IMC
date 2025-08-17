// db.js
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // mejor usar variables de entorno
  ssl: {
    rejectUnauthorized: false // Render requiere SSL
  }
});

module.exports = pool;
