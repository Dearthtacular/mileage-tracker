const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
  year: Number,
  make: String,
  model: String,
  
  tripfuel: [{
    type: Schema.Types.ObjectId,
    ref: 'TripFuel'
  }],

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

}, {
  timestamps: true
});

module.exports = mongoose.model('Vehicle', vehicleSchema);