const mongoose = require("mongoose");
const Console = require("../../api/models/console");
const consoles = require("../../data/consoles");

const throwConsolesSeeds = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://BBDD_user:o1L9oajZNVyV7Ft2@cluster0.l65wy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Conectado a la BBDD");

    await Console.collection.drop();
    console.log("Consolas eliminadas");

    await Console.insertMany(consoles);
    console.log("Consolas introducidas");

    await mongoose.disconnect();
    console.log("Desconectado de la BBDD");
  } catch (error) {
    console.log("Error");
  }
};

throwConsolesSeeds();
