const express = require('express'),
  PORT = process.env.PORT || 8080;
  app = express(),
  bodyParser = require('body-parser'),
  bcrypt = require('bcrypt'),
  mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  profile = require('./routes/profile-route');
  Profile = require('./models/profile');
  Detail = require('./models/detail');
  Record = require('./models/record');
  TimelineCard = require('./models/timeline-card');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

// Routes //

app.use('/profiles', profile);
// app.use('/record', record);
// app.use('/details', details);
// app.use('/timeline-card', timelineCard);

// setup conection to MongoDB //

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/fetch');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to database')
});

// -------------------------- //


app.listen(PORT, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log(`Listening on ${PORT}...`)
});
