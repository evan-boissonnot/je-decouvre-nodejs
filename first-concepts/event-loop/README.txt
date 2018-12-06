bien penser à la complexité de son code !
> https://en.wikipedia.org/wiki/Time_complexity 

attention aux expressions régulières ! 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
> la plupart du temps pas O(n) mais O(2^n)
>> exploitable par https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
https://nodejs.org/en/docs/guides/dont-block-the-event-loop/ 

node .\003-blok-with-regular-saferegex.js '(\/.+)+$'
> permet de nous indiquer que c'est une mauvaise regex
> https://github.com/substack/safe-regex


faire attention à la taille des objets à transformer en json ou de json vers chaine
car O(n)
> utiliser https://www.npmjs.com/package/JSONStream
> utiliser https://gitlab.com/philbooth/bfj  


pour des parcours itératifs O(n), leur préférer un système O(1) si possible.
> du coup utiliser un parcours récursif avec setImmediate

pour des traitements plus complexes : 
utilisation du offloading => utilisation du Worker Pool => et ne pas bloquer le Worker Pool

pour des calculs complexes, or traitement I/O, voir pour ne pas utiliser node.js


DU COUP attention aux modules développés par les autres devs !!