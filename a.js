const fs = require('fs')
let http = require('http')

let server = http.createServer()

server.on('request', function (req, res) {
  // res.setHeader('Content-Type','text/plain;charset=utf-8')
  let url = req.url
  if (url === '/') {
    fs.readFile('./abc.html', function (err, data) {
      if (err) {
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')
        res.end('文件读取失败')
      } else {
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.end(data)
      }
    })
  }
})


server.listen(5000, function () {
  console.log('服务器启动成功');
})  