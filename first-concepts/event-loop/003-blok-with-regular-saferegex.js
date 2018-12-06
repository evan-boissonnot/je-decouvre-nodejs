const safe = require("safe-regex");

let regex = process.argv.slice(2).join(' ');

console.log(safe(regex));