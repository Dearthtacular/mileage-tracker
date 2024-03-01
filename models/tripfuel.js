const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tripFuelSchema = new Schema({
    tripStart:
    {
        type: Number,

    },
    tripEnd:
    {
        type: Number,

    },
    fuelInfo: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('TripFuel', tripFuelSchema);