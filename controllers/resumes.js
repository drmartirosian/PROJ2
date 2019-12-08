const Dbase = require('../models/dbase');

module.exports = {
  createResume,
  delete: dDeleteResume,
  showResume,
  updateResume,
  editResume, 
};



//-------------------------------------------------
function createResume(req, res, next) {
  console.log(req.body)
  req.user.resume.push(req.body);
  console.log('USER',req.user)
  console.log('BODY',req.body)
  
  Dbase.findById(req.user._id, function(err, db){
    db = req.user
    db.resume = req.body 
    db.save()
  })
res.redirect('/dbases')
  // req.user.save(function(err) {
  //   res.redirect('/dbases');
  console.log('CREATEd RESUME FIRED!') 
};
 

//-------------------------------------------------
function dDeleteResume(req, res, next) {
// Remove a destination from the user
  Dbase.findById(req.user._id, function(err, user) {
     if ( user ) {
       // Find subdoc
       var subdoc = user.resume.id(req.params.id);
       // Remove subdoc
       subdoc.remove();
       // Save user
       user.save(function (err) {
         if (err) return handleError(err);
       });             
     }
  });
  res.redirect('/dbases');
  console.log('DELETE X FIRED!')
};
//-------------------------------------------------
function showResume(req, res){
  const userid = req.params.id;
  
  Dbase.findById(userid, function(err, users, userid) {
    res.render('dbases/resume', {
      users, 
      user: req.user,
    });
  });
  console.log('SHOW X FIRED!')
};
//-------------------------------------------------
function updateResume(req, res){ 
  // Update a destination from the user
  Dbase.findById(req.user._id, function(err, user) {
    if ( user ) {
      // Find subdoc
      var subdoc = user.resume.id(req.params.id);
      // update subdoc
      subdoc.set(req.body);
      // Save to user
      user.save(function (err) {
        if (err) return handleError(err);
      }); 
    }
  });
  res.redirect('/dbases');
  console.log('UPDATE X FIRED!')
};
//-------------------------------------------------
function editResume(req, res){
  Dbase.find(function(err, users) {
        // console.log(req.params)
    res.render('dbases/:id/resume', {
      users, 
      user: req.user
    });
  });
  console.log('EDIT X FIRED!')
};
//-------------------------------------------------