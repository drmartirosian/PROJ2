const Dbase = require('../models/dbase');



module.exports = {
  index,
  create,
  delete: dDelete,
  show,
  update,
  new: newDB,
  edit, 
};

function index(req, res, next) {
  Dbase.find({}, function(err, users, avatar) {
    res.render('dbases/index', {
      users, 
      user: req.user,
    });
  });
  console.log('INDEX FIRED!')
}
function create(req, res, next) {
  req.user.aboutme.push(req.body);
  req.user.save(function(err) {
    res.redirect('/dbases');
  });
  console.log('CREATE FIRED!')
}
function dDelete(req, res, next) {
// Remove a destination from the user
  Dbase.findById(req.user._id, function(err, user) {
     if ( user ) {
       // Find subdoc
       var subdoc = user.aboutme.id(req.params.id);
       // Remove subdoc
       subdoc.remove();
       // Save user
       user.save(function (err) {
         if (err) return handleError(err);
       });             
     }
  });
  res.redirect('/dbases');
  console.log('DELETE FIRED!')
};
function show(req, res){
  const userid = req.params.id;
  Dbase.findById(userid, function(err, users, userid) {
    res.render('dbases/show', {
      users, 
      user: req.user,
    });
  });
  console.log('SHOW FIRED!')
};
//-------------------------------------------------
function update(req, res){ 
  // Update a destination from the user
  Dbase.findById(req.user._id, function(err, user) {
    if ( user ) {
      // Find subdoc
      var subdoc = user.aboutme.id(req.params.id);
      // update subdoc
      subdoc.set(req.body);
      // console.log(req.body);
      // console.log(subdoc);
      // Save to user
      user.save(function (err) {
        if (err) return handleError(err);
      }); 
    }
  });
  res.redirect('/dbases');
  console.log('UPDATE FIRED!')
};
//---------------------------------------------------
function newDB(req, res){
  res.render('dbases/new');
  console.log('NEW FIRED!')
}
function edit(req, res){
  Dbase.find(function(err, users) {
    res.render('dbases/edit', {
      users, 
      user: req.user
    });
  });
  console.log('EDIT FIRED!')
};