const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

/* GET users listing. */
/* router.get("/", function (req, res, next) {
  res.send("respond with a resource");
}); */
router.get('/', userController.getUsers)

router.get("/:id", userController.getUser)

router.post("/", userController.save);

module.exports = router;
