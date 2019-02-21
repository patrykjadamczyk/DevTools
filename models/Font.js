mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FontSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  types:[
    {
      family: { type: String, required: false }, path: { type: String, required: false}
    }
  ]
});
module.exports = Font = mongoose.model("font", FontSchema);