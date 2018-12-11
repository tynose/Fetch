const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Profile = require("../models/profile");

const recordSchema = new Schema({
  vet_clinic: {
    type: String,
    required: true,
    max: 100
  },
  vet_name: {
    type: String,
    required: true,
    max: 100
  },
  pet_name: {
    type: String,
    required: true,
    max: 100
  },
  microchip: {
    type: String,
    required: true,
    max: 100
  },
  species: {
    type: String,
    required: true,
    max: 100
  },
  shots: {
    type: String,
    required: true,
    max: 200
  },
  date_of_visit: {
    type: Date,
    required: true,
  },
  date_of_visit: {
    type: String,
    required: true,
  },
  misc: {
    type: String,
    required: true,
    max: 300
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
  },
  profile: {
    type: Schema.Types.ObjectId,
    ref: "Profile"
  }
});

module.exports = mongoose.model("Record", recordSchema);