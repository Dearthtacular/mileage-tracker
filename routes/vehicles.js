const router = require('express').Router();
const passport = require('passport');
const vehicleCtrl = require('../controllers/vehicles')
const tripFuelCtrl = require('../controllers/tripfuels')



// router.get('/', function (req, res) {
//     res.render('vehicles/index')
// });

router.get('/', vehicleCtrl.index)
router.get('/new', vehicleCtrl.new)
router.get('/:id', vehicleCtrl.show);
router.post('/', vehicleCtrl.create)
router.post('/:id/tripfuels', tripFuelCtrl.addTripFuels)

module.exports = router;