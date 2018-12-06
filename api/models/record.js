const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Profile = require("../models/profile");

const recordSchema = new Schema({
  profile_id: {
    type: Schema.Types.ObjectId,
    ref: 'Profile'
  },
  username: {
    type: String,
    required: true,
    max: 100
  },
  date_of_visit: {
    type: Date,
    required: true,
  },
  misc: {
    type: String,
    required: true,
    max: 200
  },
  weight: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
    default: new Date()
  },
  updated_at: {
   type: Date
  }
});

module.exports = mongoose.model("Record", recordSchema);