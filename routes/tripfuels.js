const router = require('express').Router();
const passport = require('passport');
const tripFuelCtrl = require('../controllers/tripfuels')
const isLoggedIn = require('../config/auth')

router.get('/', tripFuelCtrl.index)
router.get('/new', isLoggedIn, tripFuelCtrl.new)
router.get('/:id', tripFuelCtrl.show)


module.exports = router;