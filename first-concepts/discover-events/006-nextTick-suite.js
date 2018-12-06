const EventEmitter = require("events");
const util = require("util");

function MyEmitter() {
    EventEmitter.call(this);
    this.emit('event'); // ici ça ne fonctionne pas => nous ne sommes pas encore arrivés à la partie d'assignation du callback event
}

util.inherits(MyEmitter, EventEmitter); // Héritage

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log("an event occured");
});

