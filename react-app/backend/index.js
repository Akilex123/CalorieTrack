require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// MySQL konekcija
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Provera konekcije
db.connect((err) => {
  if (err) {
    console.error("Greška prilikom konekcije na bazu:", err.message);
    return;
  }
  console.log("Uspešna konekcija na MySQL bazu!");
});

// Test ruta
app.get("/", (req, res) => {
  res.send("Radi backend!");
});

// Ruta za dobavljanje korisnika
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Start servera
app.listen(port, () => {
  console.log(`Server pokrenut na http://localhost:${port}`);
});
