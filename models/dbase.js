var mongoose = require('mongoose');


var aboutmeSchema = new mongoose.Schema({ 
  text: String, 
});

var profileSchema = new mongoose.Schema({
  name: String, 
  avatar: String,
  googleId: String, 
  aboutme: [aboutmeSchema],
  favorites: [],
});


module.exports = mongoose.model('Dbase', profileSchema);