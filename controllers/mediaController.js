const Media = require("../models/Media");

const save = async (req, res) => {
  const { title, description, image, genre, trailer } = req.body;

  try {
    if (!title || !description || !image || !genre || !trailer ) {
      res.status(409).json({ msg: "Todos los campos son requeridos..." });
    } else {
      const media = new Media({ title, description, image, genre, trailer });
      const newMedia = await media.save();
      res.status(201).json({ msg: "Recurso creado" });
      console.log(newMedia);
    }
  } catch (error) {
    res.status(400).json({ msg: "Algo salió mal..." + error });
    console.log(error);
  }
};

module.exports = { save };
