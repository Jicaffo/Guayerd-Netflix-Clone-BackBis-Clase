const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // res.render("index", { title: "Express" });
  // res.json({ msg: "Página de inicio" });
  res.status(200).json({ msg: "Página de inicio" });
});

router.post("/", function (req, res, next) {
  // res.render("index", { title: "Express" });
  // res.json({ msg: "Página de inicio" });
  res.status(201).json({ msg: "Página de inicio" });
});

module.exports = router;
