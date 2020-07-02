const router = require('express').Router();
const Puppy = require('../models/Puppy.model');

router.get('/', (req, res) => {
  Puppy.find()
    .then((puppies) => res.json(puppies))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.get('/:id', (req, res) => {
  Puppy.findById(req.params.id)
    .then((puppy) => res.json(puppy))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.post('/', (req, res) => {
  const name = req.body.name;
  const breed = req.body.breed;
  const age = Number(req.body.age);
  const cute = req.body.cute;
  const well_behaved = req.body.well_behaved;
  const adopted = req.body.adopted;

  const newPuppy = new Puppy({
    name,
    breed,
    age,
    cute,
    well_behaved,
    adopted,
  });

  newPuppy
    .save()
    .then(() => res.json(newPuppy))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.put('/:id/update', (req, res) => {
  let updates = req.body;

  Puppy.findOneAndUpdate({ _id: req.params.id }, updates, { new: true })
    .then((updatedPuppy) => res.json(updatedPuppy))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.delete('/:id', (req, res) => {
  Puppy.findByIdAndDelete(req.params.id)
    .then(() => res.json('Puppy deleted =( '))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
