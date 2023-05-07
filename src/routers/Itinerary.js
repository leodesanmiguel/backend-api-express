const express = require("express");
const router = express.Router();
const itineraryController = require("../controllers/itinerayController");
// GET
router.get("/", itineraryController.getAllItineraries);
router.get("/:id", itineraryController.getOneItinerary);
router.get("/byCity/:cityId", itineraryController.getItinerariesByCityId);
// POST
router.post("/:cityId", itineraryController.addItinerary);
// UPDATE
router.put("/:id", itineraryController.modifyItinerary);
// DELETE
router.delete("/:id", itineraryController.deleteItinerary);

module.exports = router;
