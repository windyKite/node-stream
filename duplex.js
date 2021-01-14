const { Duplex } = require('stream');

const inoutStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },
  read(size){
    const char =  String.fromCharCode(this.currentCode++)
    this.push(char + '\n')
    if(this.currentCode > 90){ // 90 => Z
      this.push(null)
    }
  }
})

inoutStream.currentCode = 65

process.stdin.pipe(inoutStream).pipe(process.stdout)