// Imports & router definition
const express = require("express");
const router = express.Router();

// controller routes
const cityController = require("../controllers/cityController");

// endpoint Get
router.get("/all", cityController.getAllCities);
router.get("/country", cityController.getCitiesForCountry);
router.get("/", cityController.getCitiesForFilter);

// endpoint Post
router.post("/save", cityController.saveCity);

// endpoint Delete
router.delete("/remove/:id", cityController.removeCityById);

// endpoint Update
router.put("/update/:id", cityController.editCityById);

// export
module.exports = router;
