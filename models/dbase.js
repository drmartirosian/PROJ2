var mongoose = require('mongoose');


var aboutmeSchema = new mongoose.Schema({ 
  text: String, 
});

var profileSchema = new mongoose.Schema({
  name: String, //username
  avatar: String,
  googleId: String, //-----use to find matches in future?
  aboutme: [aboutmeSchema], //blog schema
});


module.exports = mongoose.model('Dbase', profileSchema);