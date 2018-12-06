const Profile = require('../models/profile');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.profiles = function(req, res) {
Profile.find({})
  .then(profiles => {
    res.send(profiles)
  })
  
}

exports.profileLogin = function(req, res, next) {
  Profile.findById(req.params.id, (err, profile) => {
    if(profile) {
      const token = jwt.sign({subject: profile.username}, profile.secret_code);
      res.json({token: token}).send();
    }
    res.status(401).json({ 'msg': "invalid credentials" });
    return next(err);
  })
};

exports.profileSignup = function(req, res, next) {
  let profile = new Profile({
    ...req.body,
  });
  bcrypt.hash(profile.password, 12, function (err, hash) {
    profile.password = hash;
    profile.save(err => {
      if (err) {
        return next(err);
      }
      res.send({ msg: 'a new profile has been created' })
    })
  })
};

exports.profileUpdate = function(req, res, next) {
  Profile.findByIdAndUpdate(req.params.id, { $set: req.body },(err) => {
    if (err) {
      return next(err);
    }
    this.updated_at = Date.now();
    res.send({ msg: 'your profile has been updated ' });
  }
)};

exports.profileDelete = function(req, res) {
  Profile.findByIdAndRemove(req.params.id, (err) => {
    if(err) {
      res.status(500).json({
        error: err
      });
      return next(err);
    }
    res.send({ msg: 'successfuly deleted' });
  }
)};
