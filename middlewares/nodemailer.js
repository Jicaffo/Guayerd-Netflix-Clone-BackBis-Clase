const dotenv = require("dotenv");
dotenv.config();
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_APPLICATION, // generated ethereal user
    pass: process.env.PASS_APPLICATION, // generated ethereal password
  },
});

module.exports = { transporter };
