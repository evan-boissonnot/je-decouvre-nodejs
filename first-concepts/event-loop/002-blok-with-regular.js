const express = require("express");
const app = express();

app.get('/test-redos', (request, response) => {
    let filePath = request.query.filePath;

    if(filePath.match(/(\/.+)+$/)) {
        console.log("valid path");
    } else {
        console.log("not valid path");
    }

    response.sendStatus(200);
});

app.listen(3000, () => {
    console.log("yeah listening");
});

// voir pour utilisation https://github.com/substack/safe-regex