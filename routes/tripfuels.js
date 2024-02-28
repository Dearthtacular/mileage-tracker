const router = require('express').Router();
const passport = require('passport');
const tripFuelCtrl = require('../controllers/tripfuels')
const isLoggedIn = require('../config/auth')

// router.get('/', tripFuelCtrl.index)
// router.get('/new', tripFuelCtrl.new)
// router.get('/:id', tripFuelCtrl.show)
router.delete('/tripfuels/:tripFuelsId', tripFuelCtrl.delete)
router.get('/tripfuels/:tripFuelsId', tripFuelCtrl.edit)
router.post('/vehicles/:id/tripfuels', tripFuelCtrl.addTripFuels)
router.put('/tripfuels/:tripFuelsId', tripFuelCtrl.update)

module.exports = router;