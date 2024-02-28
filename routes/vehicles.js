const router = require('express').Router();
const passport = require('passport');
const vehicleCtrl = require('../controllers/vehicles')
const tripFuelCtrl = require('../controllers/tripfuels')
const isLoggedIn = require('../config/auth')

router.get('/', vehicleCtrl.index)
router.get('/new', vehicleCtrl.new)
router.get('/:id', vehicleCtrl.show);
router.post('/', vehicleCtrl.create)
router.delete('/:vehicleId', vehicleCtrl.delete)



module.exports = router;