// À la différence des imbrications de callbacks, une promesse apporte certaines garanties :

// Les callbacks ne seront jamais appelés avant la fin du parcours de la boucle d'évènements JavaScript courante
// Les callbacks ajoutés grâce à then seront appelés, y compris après le succès ou l'échec de l'opération asynchrone
// Plusieurs callbacks peuvent être ajoutés en appelant then plusieurs fois, ils seront alors exécutés l'un après l'autre selon l'ordre dans lequel ils ont été insérés.


var promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve('roaaaarrrrr');
    }, 300);
});

promise.then((result) => {
    console.log(result);
}, (error) => {
    console.log(error);
});