// Import
const mongoose = require('mongoose');
// Mongo Schema's definition as a collection.
const Schema = mongoose.Schema;

// Data collection' definition in the new Mongo Schema
const City = new Schema({
    name: String,
    country: String,
    demonym: String,
    image: String,
    flag: String,
    timezone: Number,
    area: Number,
    population: Number,
    zip: String,
    itineraries: [{
        type: Schema.Types.ObjectId,
        ref: 'Itinerary'
    }]
});
// export model
module.exports = mongoose.model('City', City);

