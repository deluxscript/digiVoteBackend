const express = require('express');
const connectDB = require('./config/database');
var cors = require('cors');

// const electorals = require('./routes/api/electoral');
const ballots = require('./routes/api/ballot');
const voters = require('./routes/api/voter');
const candidates = require('./routes/api/candidate');
const app = express();

connectDB();

app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello World'));

// Routes
// app.use('/electorals', electorals);
app.use('/ballots', ballots);
app.use('/voters', voters);
app.use('/candidates', candidates);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));