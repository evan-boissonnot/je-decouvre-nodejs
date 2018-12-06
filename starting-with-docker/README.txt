Branchement avec docker ?

1. création fichier Dockerfile

2. création .dockerignore
> on ignore : 
node_modules
npm-debug.log

3. docket build -t evan-boissonnot/test001 .
https://stackoverflow.com/questions/28996907/docker-build-requires-1-argument-see-docker-build-help
A priori, utiliser le . pour indiquer où se trouve le Dockerfile

