const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
//use route
const notesRouter = require("./routes/notes");

const app = express();
const port = 3001;

app.use(cors());

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {
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

app.listen(port, () => {
  console.log(`REST API listening at http://localhost:${port}`);
});
