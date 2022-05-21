const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

//Requerimos los middlewares
const authJWT = require("../middlewares/authJWT");
const verificarRegistro = require("../middlewares/verificarRegistro");

/* GET users listing. */
/* router.get("/", function (req, res, next) {
  res.send("respond with a resource");
}); */
router.get("/", userController.getUsers);

router.get("/:id", userController.getUser);
//Pasamos las funciones middleware antes del controlador para que verifique que este logueado y el mail no se repita 
router.post(
  "/",
  authJWT.verificarToken,
  verificarRegistro.checkEmail,
  userController.save
);

module.exports = router;
