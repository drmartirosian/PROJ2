var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blankSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        min: 1, max: 150,
        require: true,
    },
    intro: {
        type: String,
        require: true,
    },
})

module.exports = mongoose.model('Blanks', blankSchema);