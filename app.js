// const http = require('http')

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     return res.end('Welcome to our home page')
//   }
//   if (req.url === '/about') {
//     return res.end('Here is our short history')
//   } else {
//     return res.end(`
//     <h1>Oops!</h1>
//     <a href='/'>back home</a> 
//     `)
//   }
// })

// server.listen(5001)

const _ = require('lodash')

const items = [1, [2,[3,[4]]]]


const newItems = _.flattenDeep(items)
console.log(newItems);


