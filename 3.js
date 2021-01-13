const fs = require('fs');
const http = require('http');

const server= http.createServer();
server.on('request', (request, response) => {
  const stream = fs.createReadStream('./big_file.txt');
  stream.pipe(response);
  stream.pause(); // 将 Readable Stream 改为 paused 态
  setTimeout(() => {
    stream.resume() 
  }, 3000); // 3s 后将 Readable Stream 改为 flowing 态
})

server.listen(8888);  
console.log('正在监听 8888 端口!')