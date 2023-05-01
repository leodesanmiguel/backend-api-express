// Imports & router definition
const express = require("express");
const router = express.Router();

// controller routes
const userController = require("../controllers/userController");

// endpoint Get
router.get("/all", userController.getAllUsers);
router.get("/", userController.getUserById);

// endpoint Post
router.post("/save", userController.registerUser);

// endpoint Delete
router.delete("/remove/:id", userController.removeUserById);

// endpoint Update
router.put("/update/:id", userController.updateUserById);

// export
module.exports = router;
