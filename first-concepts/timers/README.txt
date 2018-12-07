les fonctions connues comme setTimeout ont été ré-écrites dans node.js

setImmediate se lance :
- à la fin d'un cycle d'event
- après tout opération d'I/O
- avant toute opération de timer programmé

on peut annuler un immediate en récupérant le retour de setImmediate

process.nextTick s'exécute toujours avant setImmediate
et une fois le process.nextTick lancé, impossible de l'arrêter.
(le setImmediate est appelé dans la phase de check)

l'intervalle proposé pour le setTimeout et le setInterval est approximatif
car ce n'est pas de l'instantannée, et c'est mis dans une queue de traitement


https://nodejs.org/en/docs/guides/timers-in-node/

