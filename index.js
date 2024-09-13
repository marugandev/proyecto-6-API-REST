require("dotenv").config();

const express = require("express");
const { connectDB } = require("./src/config/db");
const videogamesRouter = require("./src/api/routes/videogame");
const consoleRouter = require("./src/api/routes/console");
const {
  notFoundMiddleware,
  errorHandlerMiddleware
} = require("./src/middlewares/errorMiddleware");

const PORT = 3000;
const app = express();

connectDB();

app.use(express.json());

app.use("/api/v1/videogames", videogamesRouter);
app.use("/api/v1/consoles", consoleRouter);

app.use("/*", notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(`"http://localhost:${PORT}"`);
});
