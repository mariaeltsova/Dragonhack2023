const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  id: { type: Number, required: false },
  username: { type: String, required: true },
  words: { type: [String], required: false}
});
mongoose.model("User", userSchema, "Users");