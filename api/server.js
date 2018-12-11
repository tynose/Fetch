const express = require('express'),
  PORT = process.env.PORT || 8080;
  app = express(),
  cors = require("cors");
  bodyParser = require('body-parser'),
  bcrypt = require('bcrypt'),
  mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  sgMail = require('@sendgrid/mail');
  profile = require('./routes/profile-route'),
  record = require('./routes/record-route'),
  details = require('./routes/details-route'),
  timelineCard = require('./routes/timeline-card-route');

// requiring ENV //

require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// setup middleware //

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(cors());

// Routes //

app.use("/profile", profile);
app.use('/record', record);
app.use('/details', details);
app.use('/timelinecard', timelineCard);

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
