const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const { logger } = require("./utils/logger");
const winston = require("winston");
//use route
const notesRouter = require("./routes/notes");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongo db"))
  .catch((error) => console.log(error));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// router
app.use("/api", notesRouter);

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}
app.listen(port, () => {
  logger.info(`REST API listening at http://localhost:${port}`);
});
