const express = require('express'),
	PORT = process.env.PORT || 8080,
	app = express(),
	path = require('path'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	profile = require('./routes/profile-route'),
	record = require('./routes/record-route'),
	details = require('./routes/details-route'),
	timelineCard = require('./routes/timeline-card-route');

// requiring ENV //

require('dotenv').config();

// db connection

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/fetch', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('Connected to database');
});

// setup middleware //

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes //

app.use('/profile', profile);
app.use('/record', record);
app.use('/details', details);
app.use('/timelinecard', timelineCard);

// setup conection to postgres database //

// -------------------------- //

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// -------------------------- //

app.listen(PORT, err => {
	if (err) {
		return console.error(err);
	}
	console.log(`Listening on localhost:${PORT}`);
});
