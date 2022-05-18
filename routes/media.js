const express = require("express");
const router = express.Router();
const mediaController = require("../controllers/mediaController");

// /* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

router.post("/", mediaController.save);

module.exports = router;