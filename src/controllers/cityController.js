// imports: cannot import from another file
const cityService = require("../services/cityServices");

// * * E N D * P O I N T * *
const controller = {
  getAllCities: async (req, res) => {
    try {
      console.log("iniciando consulta: getAllCities");
      let cities = await cityService.getAllCities();
      // respuesta para Postman
      res.json({
        mensaje: "Lista de todas las ciudades:",
        cities: cities,
      });
    } catch (error) {
      console.log("⚠ Endpoint error: getAllCities\n" + error);
      res.json({
        endpoint: "⚠ Endpoint error: getAllCities",
        error: error,
      });
    }
  },
  getCityById: async function (req, res) {
    try {
      let city = await cityService.getCityById(req.params.id);
      // respuesta para Postman
      console.log("Encontró esta ciudad:\n" + city);
      res.json({
        mensaje: "Encontró esta ciudad:",
        city: city,
      });
    } catch (error) {
      console.log("⚠ Endpoint error: getCityById\n" + error);
      res.json({
        endpoint: "⚠ Endpoint error: getCityById",
        error: error,
      });
    }
  },
  getGetCitiesForCountry: async (req, res) => {
    try {
      const theCountry = req.params.country;
      let cities = await cityService.getCitiesForCountry(theCountry);
      // respuesta para Postman
      res.json({
        mensaje: "Lista de todas las ciudades del pais:" + theCountry,
        cities: cities,
      });
    } catch (error) {
      console.log("⚠ Endpoint error: getAllCities\n" + error);
      res.json({
        endpoint: "⚠ Endpoint error: getGetCitiesForCountry",
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
        endpoint: "⚠ Endpoint error: getAllCities",
        error: error,
      });
    }
  },
  saveCity: async function (req, res) {
    try {
      console.log(req.body);
      let city = await cityService.saveCity(req.body);
      // respuesta para Postman
      res.json("Guarda exitosamente la ciudad:" + city);
    } catch (error) {
      console.log("⚠ Endpoint error: saveCity\n" + error.message);
      res.json({
        endpoint: "⚠ Endpoint error:saveCity",
        error: error.message,
      });
    }
  },
  removeCityById: async function (req, res) {
    try {
      let state = await cityService.removeCityById(req.params.id);
      res.json({ "Borraste la entidad": state });
    } catch (error) {
      res.json({ error: error });
    }
  },
  editCityById: async function (req, res) {
    try {
      let cityToUpdate = {
        name: req.body.name,
        countryName: req.body.countryName,
        imageUrl: req.body.imageUrl,
      };
      let updated = await cityService.updateCityById(req.body.id, cityToUpdate);
      res.json({ "Actualizaste la entidad": updated });
    } catch (error) {}
  },
  //saveCity: fCityController.saveCity(),
  //removeCityById: fCityController.removeCityById(),
  //editCityById: fCityController.editCityById(),
};

// export then controller
module.exports = controller;
