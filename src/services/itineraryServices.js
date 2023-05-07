// Import
const Itinerary = require("../models/Itinerary");

let itineraryService = {
  getAllItineraries: async function () {
    const itineraries = await Itinerary.find();
    return itineraries;
  },
  saveItinerary: async function (
    name,
    author,
    duration,
    hashtags,
    likes,
    cityId
  ) {
    let itinerary = await new Itinerary({
      name,
      author,
      duration,
      hashtags,
      likes,
      cityId,
    }).save();
    return itinerary;
  },
  getOneItinerary: async function () {},
  modifyItinerary: async function () {},
  deleteItinerary: async function () {},
  getItinerariesByCityId: async function () {},
};
module.exports = itineraryService;
