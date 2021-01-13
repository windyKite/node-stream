const fs = require('fs');
const { Stream } = require('stream');
const EventEmitter = require('events');

const s = fs.createReadStream('./big_file.txt')

console.log(s)
// s 由 fs.ReadStream 构造
console.log(s.__proto__ === fs.ReadStream.prototype); // true
// fs.ReadStream.prototype 由 Stream.Readable 构造
console.log(fs.ReadStream.prototype.__proto__ === Stream.Readable.prototype); // true
// Stream.Readable.prototype 由 Stream 构造
console.log(Stream.Readable.prototype.__proto__ === Stream.prototype); // true
// Stream.prototype 由 EventEmitter 构造
console.log(Stream.prototype.__proto__ === EventEmitter.prototype); // true
// EventEmitter.prototype 由 Object 构造
console.log(EventEmitter.prototype.__proto__ === Object.prototype); // trues