// Node 内置的 Transform Stream 示例
const fs = require("fs");
const zlib = require("zlib");
const { Transform } = require("stream");
const crypto = require("crypto");
const file = process.argv[2];

fs.createReadStream(file)
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream(file + '.gz'));

fs.createReadStream(file)
  .pipe(zlib.createGzip())
  .on("data", () => {
    process.stdout.write('对压缩完毕之后的数据做点什么!\n')
  })
  .pipe(fs.createWriteStream(file + '.zz'))
  .on("finish", () => {
    console.log("Done");
  });

const fileSize = fs.statSync(file).size
let size = 0

const reportProgress = new Transform({
  transform(chunk, encoding, callback) {
    size = size + chunk.length
    process.stdout.write(`进度: ${(size / fileSize * 100).toFixed(2)}%\n`)
    callback(null, chunk)
  }
})
fs.createReadStream(file)
  .pipe(reportProgress)
  .pipe(crypto.createCipher("aes192", "123456"))
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream(file + '1.gz'))
  .on("finish", () => {
    console.log("Done");
  });