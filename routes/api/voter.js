const express = require('express');
const router = express.Router();

const Voter = require('../../models/voterModel');

router.get('/', (req, res) => {
    Voter.find()
    .then(voters => res.json(voters))
    .catch(err => res.status(404).json({ novotersfound: 'No Voters found' }));
});

router.post('/add', (req, res) => {
    Voter.create(req.body)
    .then(voter => res.json({ msg: 'Voter added successfully' }))
    .catch(err => res.status(400).json(err));
});

module.exports = router;