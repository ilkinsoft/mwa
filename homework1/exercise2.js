// EXPLANATION:
// All 3 methods are asynchronous


const { Observable } = rxjs;
const { ajax } = rxjs.ajax; // = require("rxjs/ajax")
const { map, catchError } = rxjs.operators;

function promise() {
    return fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(response => response.results.forEach(element => {
            console.log(element.name);
            console.log(element.location);
        }))
        .catch(err => err)
}

async function async() {
    try {
        await fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(response => response.results.forEach(element => {
                console.log(element.name);
                console.log(element.location);
            }))
            .catch(err => err);
    } catch (error) {
        console.log(error)
    }
}

function reactive() {
    const obs$ = ajax.getJSON('https://randomuser.me/api/')
        .pipe(
            map(response => 
                response.results.forEach(element => {
                    console.log(element.name);
                    console.log(element.location);
                })),
            catchError(error => {
                console.log('error: ', error);
                return of(error);
            })
        );

    const subscription = obs$.subscribe(
        function (x) { },
        function (err) { console.log(err) },
        function () { console.log(`Done`) },
    )
}