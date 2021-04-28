const express = require('express');
const router = express.Router();

const Candidate = require('../../models/candidateModel');

router.get('/', (req, res) => {
    Candidate.find()
    .then(candidates => res.json(candidates))
    .catch(err => res.status(404).json({ nocandidatesfound: 'No Candidates found' }));
});

router.post('/add', (req, res) => {
    Candidate.create(req.body)
    .then(candidate => res.json({ msg: 'Candidate added successfully' }))
    .catch(err => res.status(400).json(err));
});

module.exports = router;