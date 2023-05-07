const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Itinerary = new Schema({
  name: String,
  author:String,
  price: Number,
  duration: Number,
  hashtags: { type:[String], default: []},
  likes: {
    type: Number,default: 0,
  },
  cityId: {
    type: Schema.Types.ObjectId,
    ref: 'City'
  }
});

module.exports = mongoose.model('Itinerary', Itinerary);