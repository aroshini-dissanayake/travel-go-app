const mongoose = require("mongoose");
const PlaceSchema = mongoose.Schema({
  type: {
    type: String,
    required: false,
  }, //beach, mountain, waterfalls

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

  city: {
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

module.exports = mongoose.model("Places", PlaceSchema);
