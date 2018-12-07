function getBankBalance(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getBankBalance");
            if(user === "chewie")
                resolve(1000);
            else
                reject("not chewie");
        }, 1000);
    });
};

module.exports = getBankBalance;