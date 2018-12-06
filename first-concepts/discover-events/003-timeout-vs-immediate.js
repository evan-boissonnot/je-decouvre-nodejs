const fs = require('fs');

fs.readFile("./bigfile.txt", () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});