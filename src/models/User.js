// Import
const mongoose = require('mongoose');
// Mongo Schema's definition as a collection.
const Schema = mongoose.Schema;
// Data collection' definition in the new Mongo Schema
const User = new Schema({
    name: String,
    password: String,
    date_start: String,
    image: String,
});
// export model
module.exports = mongoose.model('User', User);

