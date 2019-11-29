var router = require('express').Router();
var blanksCtrl = require('../controllers/blanks');

// GET /blanks
router.get('/blanks', blanksCtrl.index);



module.exports = router;