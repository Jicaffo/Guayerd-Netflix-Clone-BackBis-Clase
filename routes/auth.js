const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController')
//llamamos al middleware
const  verificarRegistro  = require("../middlewares/verificarRegistro");

//registro
router.post("/register", verificarRegistro.checkEmail, authController.register);//verificamos que el mail no este duplicado

//ingreso
router.post("/login", authController.login);

module.exports = router;
