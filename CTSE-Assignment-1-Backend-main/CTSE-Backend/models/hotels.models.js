const mongoose = require("mongoose");
const HotelSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  picture: {
    type: String,
    required: false,
  },

  address: {
    type: String,
    required: false,
  },

  phone: {
    type: String,
    required: false,
  },

  facilities: [
    {
      type: String,
      required: false,
    },
  ],
});

module.exports = mongoose.model("Hotels", HotelSchema);
