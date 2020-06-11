const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const puppySchema = new Schema({
  name: {
    //we want each name to be a string
    type: String,
    //puppies have to have names!
    required: true,
    //this will remove trailing whitespace from the string
    trim: true,
    //each puppy name must be at least 3 characters long
    minLength: 3,
  },
  breed: {
    //breed has the same requirements as name
    type: String,
    required: true,
    trim: true,
    minLength: 3,
  },
  age: {
    //we'll be using ages in months
    type: Number,
    //even puppies can't be ageless
    required: true,
    //puppies can't have negative ages
    min: 0,
    //once they get about 12 months, they're not puppies anymore!
    max: 12,
  },
  cute: {
    // you're either cute or you're not
    type: Boolean,
    required: true,
  },
  well_behaved: {
    type: Boolean,
    required: true,
  },
  adopted: {
    type: Boolean,
    required: true,
  },
});

const Puppy = mongoose.model('Puppy', puppySchema);

module.exports = Puppy;
