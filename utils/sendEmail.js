const { transporter } = require("../middlewares/nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const mail = process.env.EMAIL_APPLICATION;

//Envio los parametros

const enviaMail = async (email, name, enlace) => {
  await transporter.sendMail({
    from: `Guayerd NETFLIX ${mail}`, // sender address
    to: `${email}`, // list of receivers
    subject: `Bienvenido/a ${name}`, // Subject line
    html: `
    <h2>Bienvenido/a ${name}</h2>
    <p>Estás a un solo paso de disfrutar de todo nuestro contenido</p>
    <p>Haz click en el siguiente <a href=${enlace}>enlace</a> para comenzar con una experiencia única!</p>
    `, // html body
  });
};
//revisar
module.exports = { enviaMail };
