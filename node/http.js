const http = require('http')
const fs = require('fs')
http
  .createServer((req, res) => {
    const { url, method, headers } = req
    if (url === '/' && method === 'GET') {
      fs.readFile('index.html', (err, data) => {
        res.end(data)
      })
    } else if (method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
      console.log(url)
      fs.createReadStream('.' + url).pipe(res)
    }
  })
  .listen('3000')
