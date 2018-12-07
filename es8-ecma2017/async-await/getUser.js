function getUser(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("getUser");
            resolve("chewie");
        }, 1000);
    });
}


module.exports = getUser;