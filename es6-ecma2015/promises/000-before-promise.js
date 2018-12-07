function computeRandom(success, failed) {
    if(Math.random() > .5) {
        success();
    } else {
        failed();
    }
}

computeRandom(() => {
    console.log("ok");
}, () => {
    console.log("failed");
});