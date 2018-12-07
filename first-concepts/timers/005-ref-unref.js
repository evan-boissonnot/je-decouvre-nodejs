const timer = setTimeout(() => {
    console.log("ruunning or not, that's the question !");
});

timer.unref(); 

setImmediate(() => {
    timer.ref(); // revenir à la vie
});