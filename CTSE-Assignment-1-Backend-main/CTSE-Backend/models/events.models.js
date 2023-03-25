const mongoose = require("mongoose");
const EventSchema = mongoose.Schema({
  type: [
    {
      type: String,
      required: true,
    },
  ],

  event_name: {
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

  location: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  ticket_price: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Events", EventSchema);
