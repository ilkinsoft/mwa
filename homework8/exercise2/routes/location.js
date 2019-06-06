var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
const client = new MongoClient('mongodb://localhost:27017');
CircularJSON = require('circular-json')

router.post('/', function (req, res, next) {

    client.connect(function (err) {
        if (err) console.log("Error: " + err)

        const db = client.db('lecture8')
        const collection = db.collection('locations');

        collection.insert(req.body, function (err, result) {
            if (err) console.log("Error: " + err);

            console.log(result)
            res.json(result);
        })
    })
});

router.get('/', function (req, res, next) {

    client.connect(function (err) {
        if (err) console.log("Error: " + err)

        const db = client.db('lecture8')
        const locations = db.collection('locations');

        locations.ensureIndex({"location": "2dsphere"})
        let locs = locations.find({location: {$near: {$geometry: {type: "Point", coordinates: [-91.9665342, 41.017654]}}}}).limit(3)

        // console.log(locs)
        res.end(CircularJSON.stringify(locs))
    })
});

module.exports = router;
