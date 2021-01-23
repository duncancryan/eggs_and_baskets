// require express to create the router object
const express = require('express');

// require ObjectID from mongo so that any id from the request params can be transmuted and used to query
const ObjectID = require('mongodb').ObjectID;

// Build DRY CRUD router functionality to be used with any collection in the db.

const createRouter = (collection) => {
    const router = express.Router();

    // Get all from index
    router.get('/', (req, res) => {
        collection.find().toArray()
            .then((docs) => res.json(docs))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });

    // Get one by id param
    router.get('/:id', (req, res) => {
        const id = req.params.id;
        collection.findOne({ _id: ObjectID(id) })
            .then((doc) => res.json(doc))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });

    // Create at index
    router.post('/', (req, res) => {
        const newData = req.body;
        collection.insertOne(newData)
            .then(result => res.json(result.ops[0]))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });

    // Delete by id
    router.delete('/:id', (req, res) => {
        const id = ObjectID(req.params.id);
        collection.deleteOne({ _id: id })
            .then(result => res.json(result))
    });

    // Update by id
    router.put('/:id', (req, res) => {
        const id = req.params.id;
        const updatedData = req.body;
        collection.findOneAndUpdate(
            { _id: ObjectID(id) },
            { $set: updatedData },
            { returnOriginal: false }
        )
            .then((result) => res.json(result.value))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });

    return router
};

module.exports = createRouter;