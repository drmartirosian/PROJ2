var mongoose = require('mongoose');

var bioSchema = new mongoose.Schema({
  text: String,
});

var profileSchema = new mongoose.Schema({
  name: String,
  age: Number,
  single: Boolean,
  googleId: String,
  bios: [bioSchema],
});


module.exports = mongoose.model('Dbase', profileSchema);