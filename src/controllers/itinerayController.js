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

      // respuesta para Postman
      console.log("Lista de los itinerarios:\n" + itineraries);
      res.json({
        mensaje: "Lista de todos los itinerarios:",
        cities: itineraries,
      });
      //
    } catch (error) {
      res.json({ error: error });
    }
    console.log("PROBANDO3");
  },
  addItinerary: async function (req, res) {
    try {
      const city = await City.findById(req.params.cityId);
      console.log("recupero la ciudad :\n" + city);

      // MODELO DE ITINERARY
      // const Itinerary = new Schema({
      //   name: String,
      //   author: String,
      //   duration: Number,
      //   hashtags: { type: [String], default: [] },
      //   likes: { type: Number, default: 0 },
      //   activities: { type: [String], default: [] },
      //   extras: { type: [String], default: [] },
      //   price: Number,
      //   cityId: {
      //     type: Schema.Types.ObjectId,
      //     ref: "City",
      //   },
      // });

      const itinerary = new Itinerary({
        name: req.body.name,
        author: req.body.author,
        duration: req.body.duration,
        hashtags: req.body.hashtags,
        likes: req.body.likes,
        activities: req.body.activities,
        extras: req.body.extras,
        price: req.body.price,
        cityId: city._id,
      });
      await itinerary.save();
      city.itineraries.push(itinerary._id);
      await city.save();

      // respuesta para Postman
      console.log("Ingreso del itinerario:\n" + itinerary);
      res.json({
        mensaje: "Ingreso del itinerario:",
        cities: itinerary,
      });
      //
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
      const city = await City.findById(req.params.cityId);
      console.log("recupero la ciudad :\n" + city);

      let itineraryToUpdate = {
        name: req.body.name,
        author: req.body.author,
        duration: req.body.duration,
        hashtags: req.body.hashtags,
        likes: req.body.likes,
        activities: req.body.activities,
        extras: req.body.extras,
        price: req.body.price,
        cityId: city._id,
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
