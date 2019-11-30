const Dbase = require('../models/dbase');



module.exports = {
  index,
  addBios,
  delBios,
  show,
  create,
  update,

  new: newDB,
  edit, 
};

function index(req, res, next) {
  Dbase.find(function(err, dbases) {
    res.render('dbases/index', {
      dbases,
      user: req.user
    });
  });
}

function addBios(req, res, next) {
  req.user.bios.push(req.body);
  req.user.save(function(err) {
    res.redirect('/dbases');
  });
}

function delBios(req, res, next) {
}

function show(req, res){
}

function create(req, res){
  
}
function update(req, res){
  
}
function delBios(req, res){
  
}
function newDB(req, res){
  
}
function edit(req, res){
  
}