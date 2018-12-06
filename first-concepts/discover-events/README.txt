vu que un vrai et unique thread qui gère tout, il faut trouver un moyen de gérer l'aspect non bloquant : les événements.

il existe 6 phases dans node.js : 

- timer : setTimeout, setInterval
- pending callback : attente de callbacks
- idle / prepare : en interne
- poll : récupère de nouveaux événements, et execute les callback adéquats
- check : setImmediate des callbacks
- close callback : ferme les callback de type .on('close')


https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/



setTimeout vs setImmediate
- en fait si pas de gestion d'asynchrone ou d'event, les deux si lancés immédiatement feront pareils...
- par contre dans un cycle I/O normal, c'est toujours setImmediate qui sera lancé en premier, car lancer au moment du "poll"


process.nextTick(callback);
> permet de faire de l'asynchrone avec un comportement non prévu asynchrone au debut
> cela permet d'exécuter le code obligatoirement apres tout le reste du code


