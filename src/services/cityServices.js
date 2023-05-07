// imports
const City = require("../models/City");
const Itinerary = require("../models/Itinerary");

const addItineraryToCity = async (req, res) => {
  try {
    const city = await City.findById(req.params.cityId);
    const itinerary = new Itinerary({
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      city: city._id,
    });
    await itinerary.save();
    city.itineraries.push(itinerary._id);
    await city.save();
    res.json(city);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding itinerary to city" });
  }
};

const cityService = {
  getAllCities: async () => {
    try {
      const cities = await City.find().populate("itinerries");
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
  saveCity: async function (name, countryName, imageUrl) {
    let city = await new City({
      name: name,
      countryName: countryName,
      imageUrl: imageUrl,
    }).save();
    return city;
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
