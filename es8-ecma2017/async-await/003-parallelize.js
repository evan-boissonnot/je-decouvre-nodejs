// Promise.all échoue si l'une des promesses échouent
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/all
// https://medium.freecodecamp.org/here-are-examples-of-everything-new-in-ecmascript-2016-2017-and-2018-d52fa3b5a70e


async function execute() {
    [un, deux] = await Promise.all([executeOnePromise("outini"), executeOnePromise("wookie")]);

    return un + deux;
}

function executeOnePromise(message) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Date.now() + ">> " + message);
        }, 1000);
    });
}

execute().then(console.log);