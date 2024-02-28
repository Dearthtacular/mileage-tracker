const VehicleModel = require('../models/vehicle')
const TripFuelModel = require('../models/tripfuel')

module.exports = {
	addTripFuels,
	delete: deleteOne,
	update,
	edit
}

async function addTripFuels(req, res) {
	try {
		const tripFuelDoc = await TripFuelModel.create(req.body)
		console.log(tripFuelDoc);
		const vehicleDoc = await VehicleModel.findById(req.params.id)
		vehicleDoc.tripfuel.push(tripFuelDoc._id)
		await vehicleDoc.save()
		res.redirect(`/vehicles/${req.params.id}`)
	} catch (err) {
		console.log(err)
		res.send(err)
	}
}

async function update(req, res) {
	try {
		const vehicleDoc = await VehicleModel.findOne({ 'tripfuel': req.params.tripFuelsId }).populate('tripfuel');
		// console.log(vehicleDoc, 'THIS IS THE VEHICLE DOC I AM TRYING TO UPDATE')
		const tripFuelDoc = vehicleDoc.tripfuel.find(item => item._id.toString() === req.params.tripFuelsId.toString())
		// console.log(tripFuelDoc, 'THIS IS THE FUEL OBJECT I AM TRYING TO UPDATE')
		// console.log(req.body, 'THIS IS REQ.BODY')
		// console.log(tripObj)
		Object.assign(tripFuelDoc, req.body)
		await tripFuelDoc.save()
		res.redirect(`/vehicles/${vehicleDoc._id}`)
	} catch (err) {
		console.log(err)
		res.send(err)
	}
}

// async function update(req, res) {
// 	const book = await Book.findOne({'comments._id': req.params.id});
// 	const commentSubdoc = book.comments.id(req.params.id);
// 	commentSubdoc.text = req.body.text;

async function edit(req, res) {
	try {
		const vehicleDoc = await VehicleModel.findOne({ 'tripfuel': req.params.tripFuelsId }).populate('tripfuel');
		const tripFuelDoc = vehicleDoc.tripfuel.find(item => item._id.toString() === req.params.tripFuelsId.toString())
		res.render('vehicles/edit', {
			trip: tripFuelDoc
		});
	} catch (err) {
		console.log(err)
		res.send(err)
	}
}

async function deleteOne(req, res) {
	try {
		const vehicleDoc = await VehicleModel.findOne({ 'tripfuel': req.params.tripFuelsId })
		vehicleDoc.tripfuel.remove(req.params.tripFuelsId)
		await vehicleDoc.save()
		res.redirect(`/vehicles/${vehicleDoc._id}`)
	} catch (err) {
		console.log(err)
		res.send(err)
	}
}