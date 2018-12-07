console.log('before immediate');

setImmediate((args) => {
    console.log(`inside immediate ${args}`);
}, 'ouh outini');

console.log('after immediate');