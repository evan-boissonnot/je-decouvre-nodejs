const timeout = setTimeout(() => {
    console.log("yeahhh timeout")
}, 1500);

const immediate = setImmediate(() => {
    console.log("immediate yeah");
});

const interval = setInterval(() => {
    console.log("interval oops");
}, 1000);

clearTimeout(timeout);
clearImmediate(immediate);
clearInterval(interval);