const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Konekcija ka bazi
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

db.connect((err) => {
  if (err) {
    console.error("Greška pri konekciji:", err);
  } else {
    console.log("Uspesno povezano sa bazom MySQL");
  }
});

// Rute
const dailyRoutes = require("./routes/dailyDataRoutes");
const fastingRoutes = require("./routes/fastingRoutes");

app.use("/api/daily", dailyRoutes(db));
app.use("/api/fasting", fastingRoutes(db));

app.listen(process.env.PORT, () =>
  console.log(`Server radi na portu ${process.env.PORT}`)
);
