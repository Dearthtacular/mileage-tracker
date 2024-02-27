const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tripFuelSchema = new Schema({
    tripStart:
    {
        type: Number,
        required: true
    },
    tripEnd:
    {
        type: Number,
        required: true
    },
    fuelInfo: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('TripFuel', tripFuelSchema);