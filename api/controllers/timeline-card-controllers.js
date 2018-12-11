const Profile = require("../models/profile");
const TimelineCard = require("../models/timeline-card");

exports.timelineCardsAll = function(req, res) {
  TimelineCard.find({}).then(timelineCard => {
    res.send(timelineCard);
  });
};

exports.timelineCards = function (req, res, next) {
  TimelineCard.findById(req.params.id, (err, timelineCard) => {
    if (err) {
      res.status(401).json({ 'msg': "no timeline card was found with that ID" });
      return next(err);
    }
    res.json(timelineCard)
  })
};

exports.timelineCardCreate = function (req, res, next) {
  let timelineCard = new TimelineCard({
    ...req.body,
  });

  timelineCard.save(err => {
    if (err) {
      return next(err);
    }
    res.status(201).send({ msg: 'a new timeline card has been created' })
  });
  Profile.findById(timelineCard.profile)
    .then(profile => {
      profile.timeline_card.unshift(timelineCard._id);
      return profile.save();
    })
    .catch(err => {
      console.log(err);
    });
};

exports.timelineCardUpdate = function (req, res, next) {
  TimelineCard.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
    if (err) {
      return next(err);
    }
    this.updated_at = Date.now();
    res.send({ msg: 'your timelineCard has been updated ' });
  })
  .then()
};

exports.timelineCardDelete = function (req, res) {
  TimelineCard.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      res.status(500).json({
        error: err
      });
      return next(err);
    }
    res.send({ msg: 'successfuly deleted' });
  });
};