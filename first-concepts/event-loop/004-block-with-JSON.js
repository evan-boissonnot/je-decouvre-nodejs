var obj = { a: 1};
var niter = 20;

var before, res, took;

for (let index = 0; index < niter; index++) {
    obj = {obj1: obj, obj2: obj};   
}

before = process.hrtime();
res =  JSON.stringify(obj);
took = process.hrtime(before);

console.log(`process JSON : ${took}`); // process long


before = process.hrtime();
res = res.indexOf("nomatch");
took = process.hrtime(before);

console.log(`process index of ${took}`);


before = process.hrtime();
res = JSON.parse(res);
took = process.hrtime(before);

console.log(`process parse ${took}`); // process long

