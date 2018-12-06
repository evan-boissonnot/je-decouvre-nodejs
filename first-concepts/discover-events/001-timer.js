const fs = require("fs");

const time = Date.now();

function someAsyncOperation(callback) {
    const delay = Date.now() - time;
    console.log(`0.0 ${delay} ms read`);

    fs.readFile("./bigfile.txt", callback);

    console.log(`0.1 ${delay} ms read`);
}

setTimeout(() => {
   const delay = Date.now() - time;
   
   console.log(`${delay} ms for last tick`);
}, 100);


someAsyncOperation(() => {
    const starCallback = Date.now();

    console.log("00. someAsyncOperation");
    while (Date.now() - starCallback < 10) {
        // waiting ... sleeping zzzz
        console.log("00. someAsyncOperation : " + Date.now());
    }
});