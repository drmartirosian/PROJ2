var router = require('express').Router();
var dBasesCtrl = require('../controllers/dbases');

// //RESTful Routes
router.get('/dbases', dBasesCtrl.index);
router.post('/bios', isLoggedIn, dBasesCtrl.addBios);


// router.delete('/bios/:id', dBasesCtrl.delBios);
// router.get('/:id', dBasesCtrl.show);
// router.post('/', dBasesCtrl.create);
// router.put('/:id', dBasesCtrl.update)

// // // NON-RESTful Routes
// router.get('/new', dBasesCtrl.new)
// router.get('/:id/edit', dBasesCtrl.edit)





// ONLY IF LOGGED IN...
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
};



module.exports = router;