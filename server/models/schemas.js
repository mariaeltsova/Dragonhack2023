const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  id: { type: Number, required: false },
  username: { type: String, required: true },
  words: { type: [wordSchema], required: false}
});
const wordSchema = new mongoose.Schema({
  id: { type: String, required: false },
  sklon: { type: [String], required: true }
});
mongoose.model("User", userSchema, "Users");
mongoose.model("Word", wordSchema, "Words");