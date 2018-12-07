console.log("STARTING BLOCKS");

function launch(args) {
    console.log(args);
}

setTimeout(launch, 1500, 'groarrrrr');


setTimeout((args) => {
    console.log("lambda : " + args)
}, 1000, 'outini');