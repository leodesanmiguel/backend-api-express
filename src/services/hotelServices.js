// Import
const Hotel = require("../models/Hotel");

let hotelService = {
  getAllHotels: async function () {
    const hotels = await Hotel.find();
    return hotels;
  },
  saveHotel: async function (name, password, date_start, image) {
    let Hotel = await new Hotel({
      name,
      address,
      country,
      type,
      stars,
      coordinate,
      image,
      nameCity,
    }).save();
    return Hotel;
  },
  getOneHotel: async function () {},
  modifyHotel: async function () {},
  deleteHotel: async function () {},
};

module.exports = hotelService;
