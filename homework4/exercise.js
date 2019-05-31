const http = require('http')
const { fork } = require('child_process')
const url = require('url')

const server = http.createServer()

server.on('request', (req, res) => {

    console.log('url: ' + req.url)
    let fileName = url.parse(req.url, true).query.filename

    const childProcess = fork('childprocess.js')
    childProcess.send(fileName)

    childProcess.on('message', chunk => {

        if (chunk === 'ex'){
            childProcess.kill();
            res.end();
        }
        else{
            res.end(chunk)
        }
    })
})

server.listen(3000)