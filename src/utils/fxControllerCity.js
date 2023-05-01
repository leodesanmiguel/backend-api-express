// Functions
const cityService = require("../services/cityServices");

/**
 * (ES) recupera y carga el listado de ciudades que guarda en la base de dato
 *
 * (EN) retrieves and loads the list of cities stored in the database
 *
 * @param {*} req requerimiento: no lo utiliza porque listará todas la ciudades
 * @param {*} res respuesta: devuelve todo el listado de ciudades.
 */
const getAllCities = async (req, res) => {
  try {
    let cities = await cityService.getAllCities();
  } catch (error) {
    console.log("⚠ Endpoint error: getAllCities\n" + error);
    res.json({
      endpoint: "getAllCities",
      error: error,
    });
  }
};

/**
 * (ES) Se envia el nombre del pais, si lo encuentra
 * carga el listado de ciudades que coincida con ese nombre de pais
 *
 * @param {*} req requerimiento: envia el nombre del pais
 * @param {*} res respuesta: devuelve todo el listado de ciudades.
 */
const getCitiesForCountry = async (req, res) => {
  try {
    let cities = await cityService.getCities();
  } catch (error) {
    console.log("⚠ Endpoint error: getAllCities\n" + error);
    res.json({
      endpoint: "getAllCities",
      error: error,
    });
  }
};

/**
 * (ES) Se envia el nombre del pais, si lo encuentra
 * carga el listado de ciudades que coincida con ese nombre de pais
 *
 * @param {*} req requerimiento: envia el nombre del pais
 * @param {*} res respuesta: devuelve todo el listado de ciudades.
 */
const getCitiesForFilter = async (req, res) => {
  try {
    let cities = await cityService.getCities();
  } catch (error) {
    console.log("⚠ Endpoint error: getAllCities\n" + error);
    res.json({
      endpoint: "getAllCities",
      error: error,
    });
  }
};

