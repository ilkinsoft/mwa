    
var dns = require('dns');

dns.resolve("www.mum.edu",async function (err, data) {

    await console.log(data);
})