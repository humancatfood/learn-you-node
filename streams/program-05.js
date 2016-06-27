const through = require('through2');
const split = require('split');

const stream = through(write/*, end*/);

process.stdin
  .pipe(split())
  .pipe(stream)
  .pipe(process.stdout);

let odd = true;
function write (line, _, next)
{
  line = line.toString();
  line = odd ? line.toLowerCase() : line.toUpperCase();
  this.push(line + '\n');
  odd = !odd;
  next();
}

