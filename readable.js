const { Readable } = require('stream');

const inStream = new Readable();

inStream.push("ABCDEFGHIJKLM");
inStream.push("NOPQRSTUVWXYZ");

inStream.push(null); // no more data
inStream.pipe(process.stdout)