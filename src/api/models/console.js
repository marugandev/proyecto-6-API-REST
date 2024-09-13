const mongoose = require("mongoose");

const consoleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    manufacturer: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    videogames: [{ type: mongoose.Types.ObjectId, ref: "videogames" }]
  },
  { timestamps: true }
);

const Console = mongoose.model("consoles", consoleSchema, "consoles");

module.exports = Console;
