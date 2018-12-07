const getUser = require("./getUser");
const getBankBalance = require('./getBankBalance');

function getAmount(userId) {
    getUser(userId).then(getBankBalance)
                   .then(amount => {
                        console.log(amount);
                   });
}

getAmount(1);