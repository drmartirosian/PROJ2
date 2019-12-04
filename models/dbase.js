var mongoose = require('mongoose');


var aboutmeSchema = new mongoose.Schema({ 
  text: String, 
});

var profileSchema = new mongoose.Schema({
  name: String, 
  avatar: String,
  googleId: String, 
  aboutme: [aboutmeSchema],
});


module.exports = mongoose.model('Dbase', profileSchema);