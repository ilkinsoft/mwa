const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true });
let db;
let app = express();
let collection;

app.use((req, res, next) => {
    if (!db) {
        client.connect(function (err) {
            db = client.db('zipcodes');
            req.db = db;
            collection = db.collection('zips');
            next();
        })
    } else {
        req.db = db;
        collection = db.collection('zips');
        next();
    }
});

app.get('/findAllZipsInWashington', async function (req, res) {
    let data = await collection.aggregate([

        { $match: { state: "WA" } },
        { $project: { '_id': 1 } }

    ]).toArray();
    console.log(data);
    res.end();
})

app.get('/findAllZipsWithPopulationLessThan5000', async function (req, res) {
    let data = await collection.aggregate([
        { $match: { 'pop': { $lt: 5000 } } },
        { $project: { '_id': 1  }}

    ]).toArray();
    console.log(data);
    res.end();
})

app.get('/findAllWhichHasMoreThanOneZip', async function (req, res) {
    let data = await collection.aggregate([
        {
            $group: {
                _id: { 'state': '$state', 'city': '$city' },
                num_zips: { $sum: 1 }
            }
        },
        {
            $match: { num_zips: { $gt: 1 } }
        },
        {
            $sort: { state: 1, city: 1 }
        }
    ]).toArray();
    console.log(data);
    res.end();
})

app.get('/findLeastPopulatedCityInEachState', async function (req, res) {
    let data = await collection.aggregate([
        {
            $group: {
                _id: { 'state': '$state', 'city': '$city' },
                pop_sum: { $sum: '$pop' }
            }
        },
        {
            $sort: { '_id.state'  : 1, pop_sum: 1 }
        },
        {
            $group: { 
                _id: '$_id.state',
                city : {$first : '$_id.city'},
                pop_sum : {$first : '$pop_sum'}
            }
        },
        {
            $sort: { '_id'  : 1 }
        }

    ]).toArray();
    console.log(data);
    res.end();
})


app.listen('3000', () => console.log("listenng on 3000..."))