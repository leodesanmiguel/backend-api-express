// Import
const mongoose = require("mongoose");
// Mongo Schema's definition as a collection.
const Schema = mongoose.Schema;

const Itinerary = new Schema({
  name: { type: String, default: "" },
  author: { type: String, default: "" },
  duration: { type: Number, default: 0 },
  hashtags: { type: [String], default: [] },
  likes: { type: Number, default: 0 },
  activities: { type: [String], default: [] },
  extras: { type: [String], default: [] },
  price: { type: Number, default: 0 },
  cityId: {
    type: Schema.Types.ObjectId,
    ref: "City",
  },
});

module.exports = mongoose.model("Itinerary", Itinerary);
