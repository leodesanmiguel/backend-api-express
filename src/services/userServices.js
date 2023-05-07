// Import
const User = require("../models/User");

let userService = {
  getAllItineraries: async function () {
    const itineraries = await User.find();
    return itineraries;
  },
  saveUser: async function (name, password, date_start, image) {
    let user = await new User({
      name,
      password,
      date_start,
      image,
    }).save();
    return user;
  },
  getOneUser: async function () {},
  modifyUser: async function () {},
  deleteUser: async function () {},
};

module.exports = userService;
