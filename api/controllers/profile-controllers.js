const Profile = require('../models/profile');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET_KEY || "v0ei4dhfwjokb9s19qt6rt";

// get all profiles

exports.profiles = function(req, res) {
  Profile.find({})
  .then(profiles => {
    res.send(profiles)
  })  
}

// profile sign up

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
      res.status(201).send({ msg: 'a new profile has been created' })
    });
  });
};

// profile sign up

exports.profileLogin = function(req, res) {  
  let { username, password } = req.body;

  Profile.findOne({username: username})
    .then(profile => {                  
      bcrypt.compare(password, profile.password, (err, result) => {
        if(result) {
          const token = jwt.sign({ subject: username }, SECRET_KEY);
          res.json({token: token});
        } else if(err) {
          res.status(401).json({ msg: "invalid credentials" }
        )};
      });
    })
    .catch(err => {
      console.log(err);    
    })
};

// profile authorization  //

exports.authorize = function(req, res, next) {
  const { authorization } = req.headers;

  const token = authorization.split('Bearer ')[1];

  if(!token) {
    return res.status(401).json({'msg': 'no token provided'});
  }
  
  const decoded = jwt.verify(token, SECRET_KEY);
  
  if(!decoded) {    
    return res.status(401).json({ 'msg': 'invalid token' });
  }

  req.profile = decoded;
  next(); 
}

// get logged in profile //

exports.loggedInProfile = function(req, res, next) {
  const username = req.profile.subject;
  
  Profile.findOne({
    username: username
  })
  .populate('record timeline_card')
  .exec((err, profile) => {
    if (err) {
      res.status(401).json({ 'msg': "no profile  was found with that ID" });
      return next(err);
    }
    res.json(profile)
  });
};

// profile update

exports.profileUpdate = function(req, res, next) {
  Profile.findByIdAndUpdate(req.params.id, { $set: req.body },(err) => {
    if (err) {
      return next(err);
    }
    this.updated_at = Date.now();
    res.status(200).send({ msg: 'your profile has been updated ' });
  }
)};

// profile delete

exports.profileDelete = function(req, res) {
  Profile.findByIdAndRemove(req.params.id, (err) => {
    if(err) {
      res.status(500).json({
        error: err
      });
      return next(err);
    }
    res.status(200).send({ msg: 'successfuly deleted' });
  }
)};
