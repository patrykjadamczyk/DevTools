mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FontSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  }
});
module.exports = Font = mongoose.model("font", FontSchema);