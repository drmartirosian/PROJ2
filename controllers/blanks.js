var Blanks = require('../models/blank');

module.exports = {
    index,
};

function index (req, res){
    Blanks.find({}, function(err, blanks){
        res.render('blanks/index', {blanks})
    })
}
