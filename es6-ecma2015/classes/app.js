const Wookie = require('./001-first-class');

var chewie = new Wookie("chewie");
console.log(chewie.getName());


const robots = require('./002-inherit.js');
var droide = new robots.droide("001");
var r2d2 = new robots.r2("r2d2");

//console.log(droide.shoot(null));
r2d2.shoot();
