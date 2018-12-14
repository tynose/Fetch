const Record = require("../models/record");
const Profile = require("../models/profile");

exports.recordsAll = function (req, res) {
  Record.find({})
    .then(records => {
      res.send(records)
    })
}

exports.records = function (req, res, next) {
  Record.findById(req.params.id, (err, records) => {
    if (err) {
      res.status(401).json({ 'msg': "no records were found with that id" });
      return next(err);
    }
    res.json(records)
  })
};

exports.recordRequest = function (req, res) {
  let msg = { 
    ...req.body
  }
  sgMail.send(msg);
  res.status(200).send({ msg: "your request has been sent" });
};

exports.recordCreate = function(req, res, next) {
  let record = new Record({
    ...req.body
  });  
  
  record.save(err => {
    if (err) {
      return next(err);
    }
    res.status(201).send({ msg: 'a new record has been created' })
  });
  Profile.findById(record.profile)
    .then(profile => {      
      profile.record.push(record._id);
      return profile.save();
    })
    .catch(err => {
      console.log(err);
    });
};

exports.recordUpdate = function (req, res, next) {
 Record.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
    if (err) {
      return next(err);
    }
    this.updated_at = Date.now();
    res.send({ msg: 'your record has been updated ' });
  });
};

exports.recordDelete = function (req, res, next) {
  Record.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      res.status(500).json({
        error: err
      });
      return next(err);
    }
    res.send({ msg: 'successfuly deleted' });
   });
};