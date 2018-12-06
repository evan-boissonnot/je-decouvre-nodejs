const fs = require("fs");

console.log("===== MODE ASYNCHRONE =====");
fs.readFile("./bigfile.txt", (err, data) => {
    if(err) throw err;
    console.log("A: \n" + data[0]);
});
console.log("AFTER ASYNCHRONE");

console.log("===== MODE SYNCHRONE =====");
const content = fs.readFileSync("./bigfile.txt");
console.log("S: \n" + content[0]);

console.log("AFTER SYNCHRONE");





