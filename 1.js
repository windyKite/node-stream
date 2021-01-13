const fs = require('fs');

const stream = fs.createWriteStream('./big_file.txt');
for(let i = 0; i < 1000000; i++) {
  stream.write(`这是第${i}行内容, 我们需要很多很多内容, 要不停写文件.最后还需要一个回车!\n`)
}
stream.end()
console.log('done');