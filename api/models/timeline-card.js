const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Profile = require("../models/profile");

const timelineCardSchema = new Schema({
  event: {
    type: String,
    required: true,
    max: 100
  },
  details: {
    type: String,
    required: true,
    max: 100
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

module.exports = mongoose.model("TimelineCard", timelineCardSchema);