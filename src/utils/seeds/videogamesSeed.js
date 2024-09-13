const mongoose = require("mongoose");
const Videogame = require("../../api/models/videogame");
const videogames = require("../../data/videogames");

const throwVideogamesSeeds = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://BBDD_user:o1L9oajZNVyV7Ft2@cluster0.l65wy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Conectado a la BBDD");

    await Videogame.collection.drop();
    console.log("Videojuegos eliminados");

    await Videogame.insertMany(videogames);
    console.log("Videojuegos introducidos");

    await mongoose.disconnect();
    console.log("Desconectado de la BBDD");
  } catch (error) {
    console.log("Error");
  }
};

throwVideogamesSeeds();
