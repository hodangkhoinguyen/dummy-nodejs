const os = require('os')

//info about current user
let user = os.userInfo()
console.log(user)

console.log(os.uptime())

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)