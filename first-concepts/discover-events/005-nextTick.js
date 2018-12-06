let bar;

function apiCall(callback) {
    process.nextTick(callback);
}

apiCall(() => {
    console.log("bar", bar);
});

bar = 1;

