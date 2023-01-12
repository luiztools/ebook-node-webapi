//2.1
node -v

//2.2
node

//2.3
var x=0;
console.log(x);

//2.4
console.log(x+1);

//2.5
console.log('Olá mundo!');

//2.6
node /documents/index.js

//2.7
console.log('Hello World');

//2.8
npm install -g express-generator

//2.9
express -e --git workshop

//2.10
cd workshop
npm install

//2.11
npm start

//2.12
var app = require('../app');
var debug = require('debug')('workshop:server');
var http = require('http');

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

//2.13
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var index = require('./routes/index');
var users = require('./routes/users');

//2.14
var app = express();

//2.15
// view engine setup
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

//2.16
module.exports = app;

//2.17
// códigos…
var index = require('./routes/index');
var users = require('./routes/users');

// mais códigos...

app.use('/', index);
app.use('/users', users);

//2.18
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

//2.19
res.render('index', { title: 'Express' });

//2.20
// view engine setup
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//2.21
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1><%= title %></h1>
    <p>Welcome to <%= title %></p>
  </body>
</html>

//2.22
res.render('index', { title: 'Express' });
