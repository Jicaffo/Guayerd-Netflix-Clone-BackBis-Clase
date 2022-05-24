const User = require("../models/User");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const save = async (req, res) => {
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
        expiresIn: 86400,
      });
      res.status(201).json({ newUser, token });
    }
  } catch (error) {
    res.status(400).json({ msg: "Algo salió mal..." + error });
    console.log(error);
  }
};
//traer todos
const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};
//Pedir un usuario especifico findOne(id)
//traer uno
const getUser = async (req, res) => {
  //req.params.id
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ msg: "Algo salió mal..." + error });
  }
};

//Editar el usuario req.params.id req.body metodo => put
const updateUser = async (req, res) => {
  try {
    // const { name, lastName, email, password } = req.body;
    // const newUser = { name, lastName, email, password }
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ user, msg: "Usuario modificado" });
  } catch (error) {
    res.status(400).json({ msg: "Algo salió mal..." + error });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.id);
    res.status(204).json({ msg: "Usuario eliminado con exito" });
  } catch (error) {
    res.status(400).json({ msg: "Algo salió mal..." + error });
  }
};
module.exports = { save, getUsers, getUser, updateUser, deleteUser };
