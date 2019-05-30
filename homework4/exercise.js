const http = require('http')
const{fork} = require('child_process')
const server = http.createServer()

server.on('request', (req, res)=>{
    const childProcess = fork('childprocess.js')
    childProcess.send('start')
    childProcess.on('message', sum => {
        res.end(`File read..`)
    })
})

server.listen(3000)