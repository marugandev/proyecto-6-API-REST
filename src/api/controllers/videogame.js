const Videogame = require("../models/videogame");

const getVideogames = async (req, res, next) => {
  try {
    const videogames = await Videogame.find();
    return res.status(200).json(videogames);
  } catch (error) {
    return res.status(400).json("Error al mostrar los videojuegos");
  }
};

const getVideogamesById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const videogameById = await Videogame.findById(id);

    if (Videogame) {
      return res.status(200).json(videogameById);
    } else {
      return res
        .status(404)
        .json({ message: "Videojuego no encontrado con este id" });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error al mostrar el videojuego por id",
      error
    });
  }
};

const getVideogamesByPrice = async (req, res, next) => {
  const { price } = req.params;
  const priceNumber = parseFloat(price);

  try {
    const videogamesByPrice = await Videogame.find({
      price: { $lte: priceNumber }
    });
    return res.status(200).json(videogamesByPrice);
  } catch (error) {
    return res.status(500).json({
      message: "Error al mostrar los videojuegos por precio",
      error
    });
  }
};

const postVideogames = async (req, res, next) => {
  try {
    const newVideogame = new Videogame(req.body);
    const newVideogameSaved = await newVideogame.save();
    return res.status(201).json({
      message: "Videojuego creado",
      elemento: newVideogameSaved
    });
  } catch (error) {
    return res.status(400).json("Error al crear los videojuegos");
  }
};

const putVideogames = async (req, res, next) => {
  try {
    const { id } = req.params;

    const newVideogame = new Videogame(req.body);

    newVideogame._id = id;

    const videogameUpdated = Videogame.findByIdAndUpdate(id, newVideogame, {
      new: true
    });

    return res.status(200).json({
      message: "Videojuego actualizado",
      elemento: videogameUpdated
    });
  } catch (error) {
    return res.status(400).json("Error al actualizar los videojuegos");
  }
};

const deleteVideogames = async (req, res, next) => {
  try {
    const { id } = req.params;
    const videogameDeleted = await Videogame.findOneAndDelete(id);
    return res.status(200).json({
      message: "Videojuego eliminado",
      elemento: videogameDeleted
    });
  } catch (error) {
    return res.status(400).json("Error al borrar los videojuegos");
  }
};

module.exports = {
  getVideogames,
  getVideogamesById,
  getVideogamesByPrice,
  postVideogames,
  putVideogames,
  deleteVideogames
};
