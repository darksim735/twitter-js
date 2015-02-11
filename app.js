var express = require('express');
var swig = require('swig');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

swig.setDefaults({ cache: false });

//swig.renderFile('/Users/randallwong/Desktop/FoundationsPrework/twitter-js/views/index.html', {title: 'APP SET TITLE INSERTION!'});
//app.engine(swig.renderFile());

//app.set('title', 'APP SET TITLE INSERTION!');

// pass object here
//res.locals = {};
//swig.set('title', 'APP SET TITLE INSERTION!');

// Adding the Swig Templating Engine
// commented out following old route for Routing and Views
// app.get('/', function(req, res){
//     //res.send('Hello World! Updated live!!!');
//   var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
    
// 	res.render( 'index', {title: 'Hall of Fame', people: people} );

// 	//res.send(swig.renderFile('/Users/randallwong/Desktop/FoundationsPrework/twitter-js/views/index.html'));

// });

// Routing and Views
// add routes from routes/index.js
var routes = require('./routes/');
app.use('/', routes);
app.use(express.static(__dirname + '/public'));

app.listen(3000);
