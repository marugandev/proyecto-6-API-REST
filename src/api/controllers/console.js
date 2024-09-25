const Console = require("../models/console");

const getConsole = async (req, res, next) => {
  try {
    const consoles = await Console.find().populate("videogames");
    return res.status(200).json(consoles);
  } catch (error) {
    return res.status(400).json("Error al mostrar las consolas");
  }
};

const getConsoleById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const consolesById = await Console.findById(id).populate("videogames");
    return res.status(200).json(consolesById);
  } catch (error) {
    return res.status(400).json("Error al mostrar la consola por id");
  }
};

const getConsoleByPrice = async (req, res, next) => {
  const { price } = req.params;
  const PriceNumber = parseFloat(price);

  try {
    const consolesByPrice = await Console.find({
      price: { $lte: PriceNumber }
    }).populate("videogames");
    return res.status(200).json(consolesByPrice);
  } catch (error) {
    return res.status(400).json("Error al mostrar las consolas por precio");
  }
};

const postConsole = async (req, res, next) => {
  try {
    const newConsole = new Console(req.body);
    const consoleSaved = await newConsole.save().populate("videogames");
    return res.status(201).json({
      message: "Consola creada",
      consoleSaved
    });
  } catch (error) {
    return res.status(400).json("Error al crear las consolas");
  }
};

const putConsole = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { videogames } = req.body;

    const consoleUpdated = await Console.findByIdAndUpdate(
      id,
      { $addToSet: { videogames: videogames } },
      {
        new: true
      }
    ).populate("videogames");

    return res.status(200).json({
      message: "Consola actualizada",
      elemento: consoleUpdated
    });
  } catch (error) {
    return res.status(400).json("Error al actualizar las consolas");
  }
};

const deleteConsole = async (req, res, next) => {
  try {
    const { id } = req.params;
    const consoleDeleted = await Console.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Consola eliminada",
      elemento: consoleDeleted
    });
  } catch (error) {
    return res.status(400).json("Error al borrar las consolas");
  }
};

module.exports = {
  getConsole,
  getConsoleById,
  getConsoleByPrice,
  postConsole,
  putConsole,
  deleteConsole
};
