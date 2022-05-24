const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();

const userSchema = new Schema({
  name: { type: String, required: true },
  lastName: String,
  email: { type: String, required: true},
  password: { type: String, required: true },
  //status: {type:String, enum: ["Active", "Pending"], default: "Pending" },
});

//revisar
const saltRounds = process.env.SALT_ROUNDS;

//encripta
userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
//desencripta y compara
userSchema.statics.comparePassword = async (password, passwordRecibido) => {
  return await bcrypt.compare(password, passwordRecibido);
};

module.exports = model("User", userSchema);
