const express = require("express");
const app = express();

app.get('/countOofN', (request, response) => {
    let n = request.query.n;

  // n iterations before giving someone else a turn
    for (let i = 0; i < n; i++) {
        console.log(`Iter ${i}`);
    }

    response.sendStatus(200);
});


app.get('/countOof2N', (request, response) => {
    let n = request.query.n;

  // n iterations before giving someone else a turn
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(`Iter ${i}`);    
        }
        
    }

    response.sendStatus(200);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});