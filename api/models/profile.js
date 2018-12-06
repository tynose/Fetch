const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uuid = require('uuid')
const Detail = require('../models/detail');
const TimelineCard = require('../models/timeline-card');
const Record = require('../models/record');

const profileSchema = new Schema({
  username: {
    type: String,
    required: true,
    max: 100
  },
  password: {
    type: String,
    required: true,
    max: 20
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  secret_code: {
    type: String,
    required: true,
    default: uuid()
  },
  date_created: {
    type: Date,
    required: true,
    default: new Date()
  },
  details: {
    type: Schema.Types.ObjectId,
    ref: "Detail"
  },
  record: {
    type: Schema.Types.ObjectId,
    ref: "Record"
  },
  timeline_card: {
    type: Schema.Types.ObjectId,
    ref: "TimelineCard"
  }
});

module.exports = mongoose.model("Profile", profileSchema);
