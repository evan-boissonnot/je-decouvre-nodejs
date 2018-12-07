var before = process.hrtime();

function execute() {
    var last = process.hrtime(before);

    console.log("tick : " + last);
};

const interval = setInterval(execute, 1000);

console.log(interval);