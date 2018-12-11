const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const detailsSchema = new Schema({
  background_photo: {
    type: String,
    required: false
  },
  profile_photo: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  date_of_birth: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  good_boy_status: {
    type: Boolean,
    required: false
  },
  breed: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  date_created: {
    type: Date,
    required: true,
    default: new Date()
  },
  profile: {
    type: Schema.Types.ObjectId,
    ref: "Profile"
  }
});

module.exports = mongoose.model("Details", detailsSchema);



