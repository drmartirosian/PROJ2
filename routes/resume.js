var router = require('express').Router();
var resumeCtrl = require('../controllers/resumes');

router.get('/:id/resume', isLoggedIn, resumeCtrl.showResume);
router.post('/new', isLoggedIn, resumeCtrl.createResume);

router.put('/:id', isLoggedIn, resumeCtrl.updateResume);
router.get('/:id/resume', isLoggedIn, resumeCtrl.editResume)
router.delete('/:id', isLoggedIn, resumeCtrl.delete);

// LOGGED IN REQUIRED FEATURES
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
};

module.exports = router; 