const router = require('express').Router();
const passport = require('passport');
const tripFuelCtrl = require('../controllers/tripfuels')

router.get('/', tripFuelCtrl.index)
router.get('/new', tripFuelCtrl.new)
router.get('/:id', tripFuelCtrl.show)


module.exports = router;