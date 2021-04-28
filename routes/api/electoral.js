const express = require('express');
const router = express.Router();

// import electoral from '../../models/electoralModel.js'
const Electoral = require('../../models/electoralModel');

router.get('/electorals', (req, res) => res.send('electorals route testing!'));

router.get('/', (req, res) => {
    Electoral.find()
    .then(electorals => res.json(electorals))
    .catch(err => res.status(404).json({ noelectoralsfound: 'No electorals found' }));
});

router.get('/:id', (req, res) => {
    Electoral.findById(req.params.id)
    .then(electoral => res.json(electoral))
    .catch(err => res.status(404).json({ noelectoralsfound: 'No electorals found' }));
});

router.post('/', (req, res) => {
    Electoral.create(req.body)
    .then(electoral => res.json({ msg: 'Electoral added successfully' }))
    .catch(err => res.status(400).json(err));
});

router.put('/:id', (req, res) => {
  Electoral.findByIdAndUpdate(req.params.id, req.body)
    .then(electoral => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// router.delete('/:id', (req, res) => {
//   Book.findByIdAndRemove(req.params.id, req.body)
//     .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
//     .catch(err => res.status(404).json({ error: 'No such a book' }));
// });

module.exports = router;