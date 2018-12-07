const getUser = require("./getUser");
const getBankBalance = require('./getBankBalance');

async function getAmount(userId) {
    const user = await getUser(userId);
    const amount = await getBankBalance(user);

    console.log(amount);   
}

getAmount(1);