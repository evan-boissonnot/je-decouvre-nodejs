1. express -v pug -f
2. npm install
3. npm install passport --save
4. npm install passport-facebook --save
5. 
var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;
6. npm install express-session --save
7. 
app.use(passport.initialize());
app.use(passport.session());
8. npm install connect-ensure-login --save
9. variables d'environnement en Powershell : https://stackoverflow.com/questions/9249830/how-can-i-set-node-env-production-on-windows
