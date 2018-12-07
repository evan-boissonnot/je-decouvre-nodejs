new Promise((resolve, reject) => {
    console.log("init");

    resolve();
})
.then(() => {
    console.log("next with error");
    throw new Error("failed");
})
.catch((error) => { // equivalent du catch
    console.log("error : " + error);
})
.then(() => { // equivalent du finally
    console.log("finally");
});