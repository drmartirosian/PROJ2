const Blank = require('../models/blank');

module.exports = {
  index,
};

function index(req, res, next) {
    res.render('blanks/index', {
      name: req.query.name,
      user: req.user
    });
};