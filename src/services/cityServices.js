// imports
const City = require("../models/City");
//const fxServices = require("..//utils/fxServices.City");

const cityService = {
  getAllCities: async () => {
    try {
      const cities = await City.find();
      return cities;
    } catch (error) {
      console.log("💨 Error en el sevicio de City: getAllCities\n" + error);
    }
  },
  getCitiesForCountry: async (country) => {
    try {
      //recupera cada una de cidades
      const citiesAll = await City.find();
      // filtra estas ciudades por el pais y las envia como respuesta.
      // la comparación es exacta !!!
      return citiesAll.filter((city) => city.country == country);
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
        city.name.include(req.param.filter) 
        || city.country.include(req.param.filter)
        || city.demonym.include(req.param.filter);
    } );
      return citiesFiltered;

    } catch (error) {
      console.log(
        "💨 Error en el sevicio de City: getCitiesForFilter \n" + error );
    }
  },
};

// export then controller
module.exports = cityService;