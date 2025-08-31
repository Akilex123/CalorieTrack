const express = require("express");

module.exports = (db) => {
  const router = express.Router();

  // GET - sve sesije
  router.get("/", (req, res) => {
    db.query("SELECT * FROM fasting_session", (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  });

  // POST - nova fasting sesija
  router.post("/", (req, res) => {
    const { start_time, end_time } = req.body;
    const query =
      "INSERT INTO fasting_session (start_time, end_time) VALUES (?, ?)";
    db.query(query, [start_time, end_time], (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Sesija je uspešno uneta." });
    });
  });

  return router;
};
