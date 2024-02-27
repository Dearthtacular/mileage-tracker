const VehicleModel = require('../models/vehicle')
const TripFuelModel = require('../models/tripfuel');

module.exports = {
    new: newVehicle,
    create,
    index,
    show
}

async function show(req, res) {
    try {
        const vehicleFromTheDatabase = await VehicleModel.findById(req.params.id).populate('tripfuel')
        console.log(vehicleFromTheDatabase);
        const totalFuel = vehicleFromTheDatabase.tripfuel.reduce(function(acc, tf){
            acc += tf.fuelInfo
            return acc
        },0)
        const tfArrLength = vehicleFromTheDatabase.tripfuel.length
        const startTf = vehicleFromTheDatabase.tripfuel[0].tripStart
        const endTf = vehicleFromTheDatabase.tripfuel[tfArrLength - 1].tripEnd
        const totalMiles = endTf - startTf
        const avgMpg = totalMiles/totalFuel
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
        const vehicleDocumentsFromTheDB = await VehicleModel.find({})
        console.log(vehicleDocumentsFromTheDB)
        res.render('vehicles/index', { vehicleDocs: vehicleDocumentsFromTheDB })
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
}

async function create(req, res) {
    try {
        const vehicleFromTheDatabase = await VehicleModel.create(req.body);
        console.log(vehicleFromTheDatabase);
        res.redirect(`/vehicles/${vehicleFromTheDatabase._id}`);
    } catch (err) {
        console.log(err);
        res.render("vehicles/new", { errorMsg: err.message });
    }
}

function newVehicle(req, res) {
    res.render('vehicles/new')
}