const Note = require("../model/Note");
const { logger } = require("../utils/logger");

//post a note
exports.addNote = async (req, res) => {
  //connect to server
  const newNote = new Note(req.body);
  try {
    const savedNote = await newNote.save();
    logger.info(`${req.originalUrl} - ${req.ip} - Data successfully saved`);
    res.status(200).json(savedNote);
  } catch (err) {
    logger.error(`${req.originalUrl} - ${req.ip} - ${err}`);
    res.status(500).json(err);
  }
};

//get all notes
exports.getAllNote = async (req, res) => {
  try {
    const notes = await Note.find().sort({ _id: -1 });
    logger.info(`${req.originalUrl} - ${req.ip} - All notes retrieved`);
    res.status(200).json(notes);
  } catch (err) {
    logger.error(`${req.originalUrl} - ${req.ip} - ${err}`);
    res.status(500).json(err);
  }
};

//get one note
exports.getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    logger.info(`${req.originalUrl} - ${req.ip} - Note retrieved`);
    res.status(200).json(note);
  } catch (err) {
    logger.error(`${req.originalUrl} - ${req.ip} - ${err}`);
    res.status(500).json(err);
  }
};

//put one data
exports.updateNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    logger.info(`${req.originalUrl} - ${req.ip} - data successfully updated`);
    await note.updateOne({ $set: req.body });
    res.status(200).json("Post sudah di update");
  } catch (err) {
    logger.error(`${req.originalUrl} - ${req.ip} - ${err}`);
    res.status(500).json(err);
  }
};

//delete one data
exports.deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    logger.info(`${req.originalUrl} - ${req.ip} - data successfully deleted`);
    await note.deleteOne({ $set: req.body });
    res.status(200).json("Post berhasil dihapus");
  } catch (err) {
    logger.error(`${req.originalUrl} - ${req.ip} - ${err}`);
    res.status(500).json(err);
  }
};
