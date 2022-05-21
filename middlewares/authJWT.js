const jwt = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv");
dotenv.config();

const verificarToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    
    console.log(token);
    
    if (!token) return res.status(403).json({ msg: "No hay token" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id;

    next();
  } catch (error) {
    res.status(401).json({ msg: "No autorizado" });
  }
};
//Lo exportamos como un objeto
module.exports = { verificarToken };
