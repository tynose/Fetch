const fs = require('fs');
const Details = require("../models/details");
const Profile = require('../models/profile');

exports.details = function (req, res, next) {
  Details.findById(req.params.id, (err, details) => {
    if (err) {
      res.status(401).json({ 'msg': "no detials were found with that id" });
      return next(err);
    }
    res.json(details)
  })
};

exports.detailsCreate = function (req, res, next) {
  let details = new Details({
    ...req.body,
  });
  details.save(err => {
    if (err) {
      return next(err);
    }
    res.status(201).send({ msg: "details have been created" });
  });
  Profile.findById(details.profile)
    .then(profile => {
      profile.details.unshift(Details(details));
      return profile.save();
    })
    .catch(err => {
      console.log(err);
    });
};

exports.detailsUpdate = function (req, res, next) {
  Details.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
    if (err) {
      return next(err);
    }
    this.updated_at = Date.now();
    res.status(200).send({ msg: 'your details has been updated ' });
  }
  )
};

exports.detailsDelete = function (req, res, next) {
  Details.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      res.status(500).json({
        error: err
      });
      return next(err);
    }
    res.send({ msg: 'successfuly deleted' });
  });
  Profile.findById("5c0e93c2c4f72de34a22a733")
    .then(profile => {
      profile.details.remove(Details(details));
      return profile.save();
    })
    .catch(err => {
      console.log(err);
    });
};