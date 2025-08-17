const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// Servir archivos estáticos (tu frontend)
app.use(express.static(path.join(__dirname, "public")));

// Ruta raíz (sirve tu index.html)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Ruta para insertar usuario y devolver IMC
app.post("/usuarios", async (req, res) => {
  const { cc, nombre, apellido, edad, peso, altura, genero } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO usuarios (cedula, nombre, apellido, edad, peso, altura, genero)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING imc`,
      [cc, nombre, apellido, edad, peso, altura, genero]
    );

    res.json({ imc: result.rows[0].imc });
  } catch (err) {
    console.error("Error al insertar usuario:", err);
    res.status(500).send("Error al insertar usuario");
  }
});

// Puerto dinámico
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
