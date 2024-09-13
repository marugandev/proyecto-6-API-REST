const {
  getConsole,
  getConsoleByPrice,
  getConsoleById,
  postConsole,
  putConsole,
  deleteConsole
} = require("../controllers/console");

const consoleRouter = require("express").Router();

consoleRouter.get("/", getConsole);
consoleRouter.get("/:id", getConsoleById);
consoleRouter.get("/price/:price", getConsoleByPrice);
consoleRouter.post("/", postConsole);
consoleRouter.put("/:id", putConsole);
consoleRouter.delete("/:id", deleteConsole);

module.exports = consoleRouter;
