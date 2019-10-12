const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    cityName: {
        type: String,
        required: true
    },
    temp: {
        type: Number,
        required: true
    },
    tempMin: Number,
    tempMax: Number,
    humidity: Number,
    winSpeed: Number,
    windDeg: Number,
    description: String
});

citySchema.set('toJSON', {
    transform: (document, updatedObject) => {
        updatedObject.id = updatedObject._id;
        delete updatedObject._id;
        delete updatedObject.__v;
    }
});

module.exports = mongoose.model('city', citySchema);