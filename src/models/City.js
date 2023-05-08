// Import
const mongoose = require("mongoose");
// Mongo Schema's definition as a collection.
const Schema = mongoose.Schema;

// Data collection' definition in the new Mongo Schema
const City = new Schema({
  name: { type: String, default: "" },
  country: { type: String, default: "" },
  demonym: { type: String, default: "" },
  image: { type: String, default: "" },
  flag: { type: String, default: "" },
  timezone: { type: Number, default: 0 },
  area: { type: Number, default: 0 },
  population: { type: Number, default: 0 },
  zip: { type: String, default: "" },
  itineraries: [
    {
      type: Schema.Types.ObjectId,
      ref: "Itinerary",
    },
  ],
});
// export model
module.exports = mongoose.model("City", City);
