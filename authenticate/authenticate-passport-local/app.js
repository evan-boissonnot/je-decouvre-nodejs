var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//const sql = require("mssql");
const sql = require('mssql/msnodesqlv8');

const flash              = require('connect-flash');
const  crypto            = require('crypto');
const  passport          = require('passport');
const  LocalStrategy     = require('passport-local').Strategy;
const  sess              = require('express-session');
const  Store             = require('express-session').Store; 
//const  BetterMemoryStore = require(__dirname + '/memory');
const BetterMemoryStore = require('session-memory-store')(sess);

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

var store = new BetterMemoryStore({ expires: 60 * 60 * 1000, debug: true });

 app.use(sess({
    name: 'JSESSION',
    secret: 'MYSECRETISVERYSECRET',
    store:  store,
    resave: true,
    saveUninitialized: true
}));

const sqlConfiguration = {
  server: 'localhost\\SQLEXPRESS', // You can use 'localhost\\instance' to connect to named instance
  port:1433,
  database: 'BaseDesJedi',
  options: {
    trustedConnection: true
  }
};

// sql.connect(sqlConfiguration).then(pool => {
//   return pool.request()
//             .input('input_parameter', sql.Int, 1)
//             .query('select * from Droide where id = @input_parameter');
// }).then(result => {
//   console.log(result);
// });

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);



passport.use('local', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',

  passReqToCallback: true //passback entire req to call back
} , function (req, username, password, done){
  var salt = '7fa73b47df808d36c5fe328546ddef8b9011b2c6';

  console.log(username+' = '+ password);

  sql.connect(sqlConfiguration).then(pool => {
    return pool.request()
              .input('login', sql.VarChar, username)
              .query('select * from Utilisateur where Login = @login');
  }).then(result => {
    console.log(result);

    alt = salt+''+password;
      var encPassword = crypto.createHash('sha1').update(salt).digest('hex');
      var dbPassword  = result.Password;
      
      sql.close();

      if(!(dbPassword == encPassword)){
        return done(null, false, req.flash('message','Invalid username or password.'));
      }
      
      req.session.user = result;
      return done(null, result);
  });

}));

passport.serializeUser(function(user, done){
  done(null, user.id);
});

passport.deserializeUser(function(id, done){
  sql.connect(sqlConfiguration).then(pool => {
    return pool.request()
              .input('id', sql.Int, id)
              .query('select * from Utilisateur where Id = @id');
  }).then(result => {
    done(null, result);
  });
});

app.get('/signin', function(req, res){
  console.log("signon");
  res.render('login',{'message' :req.flash('message')});
});

app.post("/signin", passport.authenticate('local', {
  successRedirect: '/users',
  failureRedirect: '/signin',
  failureFlash: true
}), function(req, res, info){
  res.render('login',{'message' :req.flash('message')});
});

app.get('/logout', function(req, res){
  req.session.destroy();
  req.logout();
  res.redirect('/signin');
});

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

module.exports = app;
