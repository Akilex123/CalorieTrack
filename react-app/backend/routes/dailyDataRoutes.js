const express = require("express");

module.exports = (db) => {
  const router = express.Router();

  // GET - sve dnevne podatke
  router.get("/", (req, res) => {
    db.query("SELECT * FROM daily_data", (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  });

  // POST - unos dnevnih podataka
  router.post("/", (req, res) => {
    const { date, calories_in, calories_out } = req.body;
    const query =
      "INSERT INTO daily_data (date, calories_in, calories_out) VALUES (?, ?, ?)";
    db.query(query, [date, calories_in, calories_out], (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Podaci su uspešno uneti." });
    });
  });

  return router;
};
