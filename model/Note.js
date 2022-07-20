const mongoosedb = require("mongoose");

const NoteSchema = new mongoosedb.Schema(
  {
    title: {
      type: String,
      required: true,
      max: 50,
    },
    note: {
      type: String,
      required: true,
      max: 500,
    },
  },
  { timestamps: true }
);

module.exports = mongoosedb.model("Note", NoteSchema);
