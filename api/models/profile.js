const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uuid = require('uuid')
const Details = require('../models/details');
const Record = require('../models/record');
const TimelineCard = require("../models/timeline-card");

const profileSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    max: 100
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  date_created: {
    type: Date,
    required: true,
    default: new Date()
  },
  details: {
    type: [Details.schema],
    default: [],
    required: true
  },
  record: [{
    type: Schema.Types.ObjectId,
    ref: "Record"
  }],
  timeline_card: [{
    type: Schema.Types.ObjectId,
    ref: "TimelineCard"
  }]
});

module.exports = mongoose.model("Profile", profileSchema);
