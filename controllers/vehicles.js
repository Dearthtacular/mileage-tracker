const VehicleModel = require('../models/vehicle')
const YMMModel = require('../models/yearsmakesmodels')

module.exports = {
    new: newVehicle,
    create,
    index,
    show,
    delete: deleteOne
}

async function deleteOne(req, res){
	try {
		const vehicleDoc = await VehicleModel.findByIdAndDelete(req.params.vehicleId)
		res.redirect('/vehicles')
	} catch(err) {
		console.log(err)
		res.send(err)
	}
}

async function show(req, res) {
    try {
        const vehicleFromTheDatabase = await VehicleModel.findById(req.params.id).populate('tripfuel')
        console.log(vehicleFromTheDatabase);
        const totalFuel = vehicleFromTheDatabase.tripfuel.reduce(function (acc, tf) {
            acc += tf.fuelInfo
            return acc
        }, 0)
        const tfArrLength = vehicleFromTheDatabase.tripfuel.length
        let avgMpg = 0;
        if (tfArrLength > 0) {
            const startTf = vehicleFromTheDatabase.tripfuel[0].tripStart
            const endTf = vehicleFromTheDatabase.tripfuel[tfArrLength - 1].tripEnd
            const totalMiles = endTf - startTf
            avgMpg = Number((totalMiles / totalFuel).toFixed(2));
        }

        res.render("vehicles/show", {
            vehicle: vehicleFromTheDatabase,
            mpg: avgMpg
        });
    } catch (err) {
        console.log(err)
        res.send(err);
    }
}

async function index(req, res) {
    try {
        const vehicleDocumentsFromTheDB = await VehicleModel.find({user: req.user._id})
        console.log(vehicleDocumentsFromTheDB)
        res.render('vehicles/index', { vehicleDocs: vehicleDocumentsFromTheDB })
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
}

async function create(req, res) {
    try {
        const YMM = req.body.vehicle.split(',')
        const objectToBePutInTheDB = {year: YMM[0], make: YMM[1], model: YMM[2], user: req.user._id}
        const vehicleFromTheDatabase = await VehicleModel.create(objectToBePutInTheDB);
        // console.log(req.body, 'THIS IS REQ.BODY');
        // console.log(vehicleFromTheDatabase);
        res.redirect(`/vehicles/${vehicleFromTheDatabase._id}`);
    } catch (err) {
        console.log(err);
        res.redirect('/vehicles/new');
    }
}

// function newVehicle(req, res) {
//     res.render('vehicles/new')
// }

async function newVehicle(req, res) {
    try {
        const YMMDocumentsFromTheDB = await YMMModel.find({})
        res.render('vehicles/new', { YMMDocs: YMMDocumentsFromTheDB })
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
}