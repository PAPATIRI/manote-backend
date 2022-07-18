const Note = require("../model/Note");

//post a note
exports.addNote = async (req, res) => {
  //connect to server
  const newNote = new Note(req.body);
  try {
    const savedNote = await newNote.save();
    res.status(200).json(savedNote);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get all notes
exports.getAllNote = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get one note
exports.getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json(err);
  }
};

//put one data
exports.updateNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    await note.updateOne({ $set: req.body });
    res.status(200).json("Post sudah di update");
  } catch (err) {
    res.status(500).json(err);
  }
};

//delete one data
exports.deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    await note.deleteOne({ $set: req.body });
    res.status(200).json("Post berhasil dihapus");
  } catch (err) {
    res.status(500).json(err);
  }
};
