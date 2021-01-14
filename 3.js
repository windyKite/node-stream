// 使用 stream 读取数据
const fs = require('fs');
const http = require('http');

const server= http.createServer();
server.on('request', (request, response) => {
  let n = 1
  const stream = fs.createReadStream('./big_file.txt');
  stream.on('data', (chunk) => {
    console.log(`这是第${n++}次读取数据, 数据的内容是: `);
    console.log(chunk.toString())
  })
  stream.on('end', () => {
    console.log(`数据全部读完了!!`);
  })
  stream.pipe(response) // 使用 pipe 链接 stream 和 response 
})

server.listen(8888);
console.log('正在监听 8888 端口!')