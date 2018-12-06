let bar;

function apiCall(callback) {
    callback();
}

apiCall(() => {
    console.log("bar", bar);
});
bar = 1;

