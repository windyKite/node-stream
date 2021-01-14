const { Readable } = require('stream');

const inStream = new Readable({
  read(size){
    const char =  String.fromCharCode(this.currentCode++)
    this.push(char + '\n')
    console.log(`推了${char}`)
    if(this.currentCode > 90){ // 90 => Z
      this.push(null)
    }
  }
});

inStream.currentCode = 65 // A
inStream.pipe(process.stdout)