const express = require('express');
const router = express.Router();

const Ballot = require('../../models/ballotModel');

router.get('/', (req, res) => {
    Ballot.find()
    .then(ballots => res.json(ballots))
    .catch(err => res.status(404).json({ noballotsfound: 'No Ballots found' }));
});


router.get('/latest', (req, res) => {
    Ballot.find({}).sort({_id:-1}).limit(1)
        .then(response => res.json(response))
});

router.post('/add', (req, res) => {
    Ballot.create(req.body)
    .then(ballot => res.json({ msg: 'Ballot added successfully' }))
    .catch(err => res.status(400).json(err));
});

module.exports = router;