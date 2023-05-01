// Imports & router definition
const express = require("express");
const router = express.Router();

// controller routes
const hotelController = require("../controllers/hotelController");

// endpoint Get
router.get("/all", hotelController.getAllHotels);
router.get("/city", hotelController.getHotelsForCity);
router.get("/country", hotelController.getHotelsForCountry);
router.get("/type", hotelController.getHotelsForType);
router.get("/star", hotelController.getHotelsForStar);
router.get("/", hotelController.getHotelsForFilter);

// endpoint Post
router.post("/reg", hotelController.registerHotel);

// endpoint Delete
router.delete("/remove/:id", hotelController.removeHotelById);
router.delete("/remove/city", hotelController.removeHotelByCity);
router.delete("/remove/country", hotelController.removeHotelByCountry);
router.delete("/remove/type", hotelController.removeHotelByType);

// endpoint Update
router.put("/update/:id", hotelController.editHotelById);

// export
module.exports = router;
