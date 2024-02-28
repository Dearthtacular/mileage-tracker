const VehicleModel = require('../models/vehicle')
const TripFuelModel = require('../models/tripfuel')

module.exports = {
	addTripFuels,
	delete: deleteOne
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

async function deleteOne(req, res){
	try {
		const vehicleDoc = await VehicleModel.findOne({'tripfuel': req.params.tripFuelsId})
		vehicleDoc.tripfuel.remove(req.params.tripFuelsId)
		await vehicleDoc.save()
		// const vehicleDocId = await VehicleModel.findById(req.params.id)
		res.redirect(`/vehicles/${vehicleDoc._id}`)
	} catch(err) {
		console.log(err)
		res.send(err)
	}
}