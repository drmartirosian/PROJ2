var router = require('express').Router();
var dBasesCtrl = require('../controllers/dbases');


router.get('/dbases', dBasesCtrl.index);
router.post('/aboutme', isLoggedIn, dBasesCtrl.create);



// LOGGED IN REQUIRED FEATURES
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
};

module.exports = router;