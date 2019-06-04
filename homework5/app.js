var express = require('express')
var axios = require('axios')
const { from } = require('rxjs')
const { shareReplay } = require('rxjs/operators')

var app = express()
var port = 3000

app.set('x-powered-by',false);
app.enable('case sensitive routing');
app.set('strict routing',true);

app.get('/users', function (request, response) {
    response.status(200)

    obs$ = from(axios.get('https://randomuser.me/api/?results=10')).pipe(shareReplay(1));
    obs$.subscribe(data=>console.log(data.data));
    response.set("Link","/users?page=2")  //example paging header
    response.set('Cache-Control', 'public, max-age=86400'); // one day

    response.end()
})

app.listen(port, function () {
    console.log('The server is running on port: ' + port)
})