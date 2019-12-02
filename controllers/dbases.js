const Dbase = require('../models/dbase');



module.exports = {
  index,
  create,
  // new: dDelete,
  show,
  // update,
  // new: newDB,
  // edit, 
};

function index(req, res, next) {
  Dbase.find(function(err, indexVar) {
    res.render('dbases/index', {

      indexVar, //used in ejs for each

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

function show(res){

  res.render('dbases/show')
};

// function update(req, res){ 
// }

// function newDB(req, res){
// }

// function edit(req, res){ 
// }