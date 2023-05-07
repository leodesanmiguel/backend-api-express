// imports:
const itineraryService = require("../services/itineraryServices");
const City = require("../models/City");
const Itinerary = require("../models/Itinerary");

// * * E N D * P O I N T * *
const controller = {
  getAllItineraries: async function (req, res) {
    console.log("PROBANDO1");
    try {
      let itineraries = await itineraryService.getAllItineraries();
      res.json({ itineraries });
      console.log("PROBANDO2");
    } catch (error) {
      res.json({ error: error });
    }
    console.log("PROBANDO3");
  },
  addItinerary: async function (req, res) {
    try {
      // localgost:3001/api/itineraries/toCity/:idCity Body: {Itinerary}
      const city = await City.findById(req.params.cityId);

      const itinerary = new Itinerary({
        name: req.body.name,
        author: req.body.author,
        duration: req.body.duration,
        hashtags: req.body.hashtags,
        likes: req.body.likes,
        cityId: city._id,
      });
      await itinerary.save();
      city.itineraries.push(itinerary._id);
      await city.save();
      res.json(city);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error adding itinerary to city" });
    }
  },
  getOneItinerary: async function (req, res) {
    try {
      let itinerary = await itineraryService.getOneItinerary(req.params.id);
      res.json({ itinerary });
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  modifyItinerary: async function (req, res) {
    try {
      let itineraryToUpdate = {
        name: req.body.name,
        author: req.body.author,
        duration: req.body.duration,
        hashtags: req.body.hashtags,
        likes: req.body.likes,
        cityId: req.body.cityId,
      };
      let updated = await itineraryService.updateitineraryById(
        req.body.id,
        itineraryToUpdate
      );
      res.json({ "Actualizaste la entidad": updated });
    } catch (error) {}
  },
  deleteItinerary: async function (req, res) {
    try {
      let state = await itineraryService.removeItineraryById(req.params.id);
      res.json({ "Borraste la entidad": state });
    } catch (error) {
      res.json({ error: error });
    }
  },
  getItinerariesByCityId: async function (req, res) {
    try {
      let itineraries = await itineraryService.getItinerariesByCityId(
        req.params.cityId
      );
      res.json({ itineraries });
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};

// export then controller
module.exports = controller;
