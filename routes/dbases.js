var router = require('express').Router();
var dBasesCtrl = require('../controllers/dbases');


router.get('/', dBasesCtrl.index);
router.post('/', isLoggedIn, dBasesCtrl.create);
router.get('/:id', isLoggedIn, dBasesCtrl.show);
router.get('/:id/edit', isLoggedIn, dBasesCtrl.edit)
router.get('/new', isLoggedIn, dBasesCtrl.new);
router.delete('/:id', isLoggedIn, dBasesCtrl.delete);
router.put('/:id', isLoggedIn, dBasesCtrl.update);


// LOGGED IN REQUIRED FEATURES
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
};

module.exports = router;