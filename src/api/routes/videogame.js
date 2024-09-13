const {
  getVideogames,
  getVideogamesById,
  getVideogamesByPrice,
  postVideogames,
  putVideogames,
  deleteVideogames
} = require("../controllers/videogame");

const videogamesRouter = require("express").Router();

videogamesRouter.get("/", getVideogames);
videogamesRouter.get("/:id", getVideogamesById);
videogamesRouter.get("/price/:price", getVideogamesByPrice);
videogamesRouter.post("/", postVideogames);
videogamesRouter.put("/:id", putVideogames);
videogamesRouter.delete("/:id", deleteVideogames);

module.exports = videogamesRouter;
