const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Profile = require('../models/profile');

const timelineCardSchema = new Schema({
  profile_id: {
    type: Schema.Types.ObjectId,
    ref: "Profile"
  },
  username: {
    type: String,
    required: true,
    max: 100
  },
  event: {
    type: String,
    required: true,
    max: 100
  },
  detials: {
    type: String,
    required: true,
    max: 100
  },
  date_created: {
    type: Date,
    required: true,
    default: new Date()
  }
});

module.exports = mongoose.model("TimelineCard", timelineCardSchema);