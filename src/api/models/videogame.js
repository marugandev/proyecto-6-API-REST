const mongoose = require("mongoose");

const videogamesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    genre: { type: String, trim: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    multiplayer: { type: Boolean },
    developer: { type: String, trim: true },
    platform: [{ type: String, trim: true }],
    img: { type: String, required: true }
  },
  { timestamps: true }
);

const Videogame = mongoose.model("videogames", videogamesSchema, "videogames");

module.exports = Videogame;
