const {Schema, model} = require("mongoose");

const mediaSchema = new Schema({    
    title: {type: String, required: true},  
    description: String,
    image: {type: String, required: true},
    genre: {type: String, required: true},
    trailer: {type: String, required: true},
})

module.exports = model("Media", mediaSchema)

// Título recurso
// Opcional: Descripción
// Imagen Portada
// Tipo (serie / película)
// Genero
// Trailer
// Opcional: Director
// Listado de subrecursos (array de objetos)?
// Título?
// Temporada?
// URL?