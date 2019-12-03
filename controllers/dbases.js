const Dbase = require('../models/dbase');



module.exports = {
  index,
  create,
  // new: dDelete,
  show,
  // update,
  new: newDB,
  edit, 
};

function index(req, res, next) {
  Dbase.find({}, function(err, users) {
    res.render('dbases/index', {
      users, 
      user: req.user
    });
  });
}

function create(req, res, next) {
  req.user.aboutme.push(req.body);
  req.user.save(function(err) {

    res.redirect('/dbases');

  });
}

// function dDelete(req, res, next) {
// }

function show(req, res){
  res.render('dbases/show', {user: req.user})
};

// function update(req, res){ 
// }

function newDB(req, res){
  res.render('dbases/show')
}

function edit(req, res){ 
  res.render('dbases/show')
}