const router = require('express').Router();
const passport = require('passport');
const tripFuelCtrl = require('../controllers/tripfuels')
const isLoggedIn = require('../config/auth')

// router.get('/', tripFuelCtrl.index)
// router.get('/new', tripFuelCtrl.new)
// router.get('/:id', tripFuelCtrl.show)
router.delete('/:tripFuelsId', tripFuelCtrl.delete)


module.exports = router;