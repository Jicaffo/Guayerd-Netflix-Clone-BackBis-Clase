const User = require("../models/User");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const register = async (req, res) => {
  const { name, lastName, email, password } = req.body;

  try {
    if (!name || !lastName || !email || !password) {
      res.status(409).json({ msg: "Todos los campos son requeridos..." });
    } else {
      const user = new User({
        name,
        lastName,
        email,
        password: await User.encryptPassword(password),
      });
      const newUser = await user.save();
      //res.status(201).json({ msg: "Usuario creado" });
      console.log(newUser);
      //revisar
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: 86400,//24hs
      });
      res.status(201).json({ newUser, token });
    }
  } catch (error) {
    res.status(400).json({ msg: "Algo salió mal..." + error });
    console.log(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const userFound = await User.findOne({ email });

  if (!userFound) return res.status(404).json({ msg: "Email no encontrado" });

  const passwordMatch = await User.comparePassword(
    password,
    userFound.password
  );

  if (!passwordMatch)
    return res.status(401).json({ token: null, msg: "Password inválido" });

  //Solo en modo DEV
  console.log(userFound);
  const token = jwt.sign({ id: userFound._id }, process.env.JWT_SECRET, {
    expiresIn: 86400,
  });
  res.json({ token });
};

module.exports = { register, login };
