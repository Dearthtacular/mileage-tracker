const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const yearMakeModelSchema = new Schema({
    year:
    {
        type: Number,
        required: true
    },
    make:
    {
        type: String,
        required: true
    },
    model:
    {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('YearsMakesModel', yearMakeModelSchema, 'YearsMakesModels');