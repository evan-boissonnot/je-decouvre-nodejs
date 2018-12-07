async function executeWith2Params(param1, param2) {
    param1 = await executeDivision(param1);
    param2 = await executeDivision(param2);

    const result = param1 + param2;

    return result;
}

function executeDivision(param) {
    return new Promise(resolve =>  {
        setTimeout(() => {
            resolve(param / 5);
        }, 1000);
    });
}

executeWith2Params(10, 5).then(console.log);