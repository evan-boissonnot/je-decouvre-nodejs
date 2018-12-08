1. create with express generator
2. create login view
3. install module mssql : https://www.npmjs.com/package/mssql
4. install module config
4.0 process.env.NODE_CONFIG_DIR = __dirname + "/config";
4.1 require(config)
4.2
npm install connect-flash
npm install passport
npm install passport-local
npm install express-session
npm install memory
npm install crypto
npm install session-memory-store

5.
var flash             = require('connect-flash');
var crypto            = require('crypto');
var passport          = require('passport');
var LocalStrategy     = require('passport-local').Strategy;
var sess              = require('express-session');
var Store             = require('express-session').Store; 
var BetterMemoryStore = require(__dirname + '/memory');

si problème connection : 
https://github.com/tediousjs/node-mssql/issues/213
=> utilisation const sql = require('mssql/msnodesqlv8')
==> https://www.npmjs.com/package/msnodesqlv8
==> const sql = require('mssql/msnodesqlv8')

example : 
https://github.com/programmer-blog/nodejs-passportjs-login-mysql 


IMPORTANT
tout code de app.get ou app.post doit etre avant

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});