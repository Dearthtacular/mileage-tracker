const VehicleModel = require('../models/vehicle')
const TripFuelModel = require('../models/tripfuel')

module.exports = {
	addTripFuels,
}

async function addTripFuels(req, res){
	try {
		const tripFuelDoc = await TripFuelModel.create(req.body)
		console.log(tripFuelDoc);
		const vehicleDoc = await VehicleModel.findById(req.params.id)
		vehicleDoc.tripfuel.push(tripFuelDoc._id)
		await vehicleDoc.save()
		res.redirect(`/vehicles/${req.params.id}`)
	} catch(err){
		console.log(err)
		res.send(err)
	}
}