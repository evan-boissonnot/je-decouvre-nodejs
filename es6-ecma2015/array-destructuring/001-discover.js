const iterable = ['o', 'u', 't'];
const [x, y, z] = iterable;

console.log(x);


const [all, year, month, day] =
    /^(\d\d\d\d)-(\d\d)-(\d\d)$/
    .exec('2999-12-31');

console.log(all);