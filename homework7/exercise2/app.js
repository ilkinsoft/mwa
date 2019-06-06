const express = require('express')
const MongoClient = require('mongodb').MongoClient
const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true })
var bodyParser = require('body-parser');
let db
let app = express()
let collection


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    if (!db) {
        client.connect(function (err) {
            db = client.db('homework07')
            req.db = db
            collection = db.collection('lectures')
            next()
        })
    }
    else {
        req.db = db
        collection = db.collection('lectures')
        next()
    }
})

app.post('/add', async function (req, res) {

    await collection.insertOne(req.body, function (err, result) {
        if (err)
            console.log("Error: " + err);

        console.log(result)
        res.json(result);
    })
})

app.get('/find', async function (req, res) {

    let data = await collection.find().toArray()

    console.log(data)
    res.json(data)
})

app.get('/findOne/:id', async function (req, res) {

    let data = await collection.findOne({ '_id': req.params.id })

    console.log(data)
    res.json(data)
})

app.delete('/delete/:id', async function (req, res) {

    let data = await collection.deleteOne({ '_id': req.params.id })

    console.log(data)
    res.json(data)
})

app.get('/search/:q', async function (req, res) {

    if (req.params.q == undefined) {
        console.log('Lecture name didnt entered')
        res.write('Lecture name didnt entered')
    }
    else {
        let regexValue = new RegExp('/.*'+ req.params.q +'.*/i')
        let data = await collection.find({ 'lecture': new RegExp(req.params.q, 'i') }).toArray()

        console.log(data)
        res.json(data)
    }
})

app.listen('3000', () => console.log('Listening on 3000...'))