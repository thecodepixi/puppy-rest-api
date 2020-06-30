const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

//Connect to MongoDB with Mongoose
const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .catch((err) => console.error(err));
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB connection established!');
});

// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
});

const puppyRouter = require('./routers/puppy');
app.use('/puppies', puppyRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Yay! The server running on port ${PORT}`);
});
