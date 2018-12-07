const obj = { firstName: 'Chewie', lastName: 'Backa' };
const obj2 = {firstName: first, lastName: last} = obj;

console.log(first);
console.log(last);



const obj3 = { foo: 123 };
const {writable, configurable} =
    Object.getOwnPropertyDescriptor(obj3, 'foo'); // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/getOwnPropertyDescriptor

console.log(writable, configurable);