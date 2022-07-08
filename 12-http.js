const http = require('http');

const server = http.createServer((req,res)=> {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('<h1>Short story</h1>')
    }
    // console.log(req)
    // res.write('welcome to our home page')
    // res.end()
})

server.listen(5000)