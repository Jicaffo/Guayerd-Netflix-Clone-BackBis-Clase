const User = require("../models/User");

const checkEmail = async (req, res, next) => {
  try {
    //Desestructuramos el req.body
    const { email } = req.body;
    const mail = await User.findOne({ email }); //Se lo pasamos como parámetro

    if (mail) return res.status(400).json({ msg: "El email ya existe" });
  } catch (error) {
    return res.status(500).json({ msg: "Algo salió mal" + error });
  }
  //Utilizamos la función next
  next();
};

//Lo exportamos como un objeto
module.exports = { checkEmail };
