// Server file where backend is pulled together and connection to db is made

// Imports

    // import express and make the backend app an instance of express
const express = require('express')
const app = express();

    // body-parser to deal with json in req/res and cors to allow cross origin connection
const bodyParser = require('body-parser');
const cors = require('cors');

    // MongoClient from mongodb to allow connection to the database
const MongoClient = require('mongodb').MongoClient;

    // import create_router module to allow for DRY implementation of RESTful routes.
const createRouter = require('./helpers/create_router');


// Configure backend app
app.use(bodyParser.json());
app.use(cors());

// Connection and assigning API index endpoints to collections in db
MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {
      const db = client.db('eggs_and_baskets');
      const eggCollection = db.collection('eggs');
      const eggRouter = createRouter(eggCollection);
      app.use('/api/eggs', eggRouter);
      const basketCollection = db.collection('baskets');
      const basketRouter = createRouter(basketCollection);
      app.use('/api/baskets', basketRouter);
    })
    .catch(console.err);

// Run
app.listen(3001, () => {
  console.log(`Running on port 3001`);
})