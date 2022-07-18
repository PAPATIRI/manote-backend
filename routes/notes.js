const router = require("express").Router();

const {
  addNote,
  getAllNote,
  getNote,
  updateNote,
  deleteNote,
} = require("./noteHandler");

//ROUTES
router.post("/note", addNote);
router.get("/notes", getAllNote);
router.get("/note/:id", getNote);
router.put("/note/:id", updateNote);
router.delete("/note/:id", deleteNote);

module.exports = router;
