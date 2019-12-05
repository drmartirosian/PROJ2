var mongoose = require('mongoose');

var resumeSchema = new mongoose.Schema(
  { firstname: String, },
  { lastname: String, },
  { age: Number, },
  { code: String, },
  { employed: Boolean, },
);

var badgeSchema = new mongoose.Schema(
  { fullname: String, required: true,},
  { codertype: String, required: true,},
  { phone: Number, required: true,},
);

var blogSchema = new mongoose.Schema(
  { text: String, },
);

var profileSchema = new mongoose.Schema({
  name: String, 
  avatar: String,
  googleId: String, 
  aboutme: [blogSchema],
  badge: [badgeSchema],
  resume: [resumeSchema],
});


module.exports = mongoose.model('Dbase', profileSchema);