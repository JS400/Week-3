const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, index: true },
  ISBN: { type: String, required: true, unique: true, index: true },
  authorId: { type: String, required: true, index: true },
  blurb: { type: String, index: true },
  publicationYear: { type: Number, required: true },
  pageCount: { type: Number, required: true },
});

bookSchema.index({
  name: "text",
  title: "text",
  genre: "text",
  blurb: "text",
  ISBN: "text",
});

module.exports = mongoose.model("books", bookSchema);
