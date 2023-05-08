// imports
const City = require("../models/City");
const Itinerary = require("../models/Itinerary");

const addItineraryToCity = async (req, res) => {
  try {
    const city = await City.findById(req.params.cityId);
    const itinerary = new Itinerary({
      name: req.body.name,
      author: req.body.author,
      hashtags: req.body.hashtags,
      likes: req.body.likes,
      activities: req.body.activities,
      extras: req.body.extras,
      price: req.body.price,
      city: city._id,
    });
    await itinerary.save();
    console.log("Se ha guardado exitosamente el itinerario:\n" + itinerary);

    city.itineraries.push(itinerary._id);
    await city.save();

    // resultado:
    console.log("Se INTRODUJO el itinerario en la ciudad:\n" + city);
    res.json({
      mensaje: "--> Ingreso del itinerario en la cudad !!!",
      city: city,
    });
  } catch (error) {
    console.log("⚠ Service Error: addItineraryToCity\n" + error);
    res.status(500).json({ message: "Error adding itinerary to city" });
    res.json({
      endpoint: "⚠ Endpoint error: addItineraryToCity",
      error: error,
    });
  }
};

/**
 * const Itinerary = new Schema({
  name: String,
  author: String,
  duration: Number,
  hashtags: { type: [String], default: [] },
  likes: { type: Number, default: 0 },
  activities: { type: [String], default: [] },
  extras: { type: [String], default: [] },
  price: Number,
  cityId: {
    type: Schema.Types.ObjectId,
    ref: "City",
  },
});
 */

const cityService = {
  getAllCities: async () => {
    try {
      console.log("Iniciando servicio: getAllCities");
      const cities = await City.find().populate("itineraries");
      return cities;
    } catch (error) {
      console.log("💨 Error en el sevicio de City: getAllCities\n" + error);
    }
  },
  getCityById: async function (id) {
    let city = await City.findById(id);
    return city;
  },
  getCitiesForCountry: async (country) => {
    try {
      //recupera cada una de cidades
      const citiesAll = await City.find();
      // filtra estas ciudades por el pais y las envia como respuesta.
      // la comparación es exacta !!!
      return citiesAll.filter((city) => city.country === country);
    } catch (error) {
      console.log(
        "💨 Error en el sevicio de City: getCitiesForCountry \n" + error
      );
    }
  },
  getCitiesForFilter: async (filter) => {
    try {
      //recupera cada una de cidades
      let citiesAllx = await City.find();
      // filtra estas ciudades por el filtro y las envia como respuesta.
      // la comparación se hace compando el filtro que esté incluido
      // en el nombre de la ciudad o en el nombre del pais o en el gentilicio
      let citiesFiltered = citiesAllx.filter((city) => {
        city.name.include(req.param.filter) ||
          city.country.include(req.param.filter) ||
          city.demonym.include(req.param.filter);
      });
      return citiesFiltered;
    } catch (error) {
      console.log(
        "💨 Error en el sevicio de City: getCitiesForFilter \n" + error
      );
    }
  },

  // Data collection' definition in the new Mongo Schema
  // const City = new Schema({
  //   name: String,
  //   country: String,
  //   demonym: String,
  //   image: String,
  //   flag: String,
  //   timezone: Number,
  //   area: Number,
  //   population: Number,
  //   zip: String,
  //   itineraries: [{
  //       type: Schema.Types.ObjectId,
  //       ref: 'Itinerary'
  //   }]
  // });

  
  saveCity: async function (
    name,
    country,
    demonym,
    image,
    flag,
    timezone,
    area,
    population,
    zip
  ) {
    let city = await new City({
      name: name,
      country: country,
      demonym: demonym,
      image: image,
      flag: flag,
      timezone: timezone,
      area: area,
      population: population,
      zip: zip,
      itineraries: []
    }).save();

  },
  removeCityById: async function (id) {
    let removed = City.findByIdAndRemove(id);
    return removed;
  },
  updateCityById: async function (id, cityUpdated) {
    let city = City.findByIdAndUpdate(id, cityUpdated);

    return city;
  },
};

// export then controller
module.exports = cityService;
