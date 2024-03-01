const router = require('express').Router();
const passport = require('passport');
const vehicleCtrl = require('../controllers/vehicles')
const tripFuelCtrl = require('../controllers/tripfuels')
const isLoggedIn = require('../config/auth')

router.get('/', isLoggedIn, vehicleCtrl.index)
router.get('/new', isLoggedIn, vehicleCtrl.new)
router.get('/:id', isLoggedIn, vehicleCtrl.show);
router.post('/', isLoggedIn, vehicleCtrl.create)
router.delete('/:vehicleId', isLoggedIn, vehicleCtrl.delete)

module.exports = router;