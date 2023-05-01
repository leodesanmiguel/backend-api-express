// Import
const mongoose = require('mongoose');
// Mongo Schema's definition as a collection.
const Schema = mongoose.Schema;
// Data collection' definition in the new Mongo Schema
const Hotel = new Schema({
    name: String,
    address: String,
    nameCity: String,
    country: String,
    type: Number,
    stars: Number,
    coordinate: String,
    image: String,
});
// export model
module.exports = mongoose.model('Hotel', Hotel);

