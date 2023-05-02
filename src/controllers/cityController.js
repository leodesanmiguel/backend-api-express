// imports: cannot import from another file
//const fCityController = require("../utils/fxControllerCity");
const cityService = require("../services/cityServices");

// * * E N D * P O I N T * *
const controller = {
  getAllCities: async (req, res) => {
    try {
      let cities = await cityService.getAllCities();
    } catch (error) {
      console.log("⚠ Endpoint error: getAllCities\n" + error);
      res.json({
        endpoint: "getAllCities",
        error: error,
      });
    }
  },
  getGetCitiesForCountry: async (req, res) => {
    try {
      let cities = await cityService.getCities();
    } catch (error) {
      console.log("⚠ Endpoint error: getAllCities\n" + error);
      res.json({
        endpoint: "getAllCities",
        error: error,
      });
    }
  },
  getCitiesForFilter: async (req, res) => {
    try {
      let cities = await cityService.getCities();
    } catch (error) {
      console.log("⚠ Endpoint error: getAllCities\n" + error);
      res.json({
        endpoint: "getAllCities",
        error: error,
      });
    }
  },
  //saveCity: fCityController.saveCity(),
  //removeCityById: fCityController.removeCityById(),
  //editCityById: fCityController.editCityById(),
};

// export then controller
module.exports = controller;
