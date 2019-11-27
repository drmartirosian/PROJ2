var express = require('express');
var router = express.Router();
const blanksCtrl = require('../controllers/blanks')


router.get('/', blanksCtrl.index);
// router.get('/new', blanksCtrl.new);
// router.get('/:id', blanksCtrl.show);
// router.post('/', blanksCtrl.create);

module.exports = router;
