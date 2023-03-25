const mongoose = require("mongoose");

const SampleSchema = mongoose.schema({
  picture: {
    type: String
  }
});

module.exports = mongoose.model("Sample", SampleSchema);
