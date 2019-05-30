const fs = require('fs');

const longOperation = () => {

    var rs = fs.createReadStream('./big.file').pipe(res)

    // let sum = 0
    // for(let i=0; i< 10000; i++){
    //     sum+=i
    // }
    // return sum
}

process.on('message', (msg) => {
    const sum = longOperation()
    process.send(sum)
    process.exit()
})