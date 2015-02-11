var express = require('express');
var app = express();
var swig = require('swig');

var logger = require('morgan');
app.use(logger('dev'));

app.listen(3000);

swig.setDefaults({ cache: false });

//swig.renderFile('/Users/randallwong/Desktop/FoundationsPrework/twitter-js/views/index.html', {title: 'APP SET TITLE INSERTION!'});
//app.engine(swig.renderFile());

//app.set('title', 'APP SET TITLE INSERTION!');


//swig.set('title', 'APP SET TITLE INSERTION!');

app.get('/', function(req, res){
    //res.send('Hello World! Updated live!!!');

res.send(swig.renderFile('/Users/randallwong/Desktop/FoundationsPrework/twitter-js/views/index.html', {title: 'APP SET TITLE INSERTION!'}));


//res.send(swig.renderFile('/Users/randallwong/Desktop/FoundationsPrework/twitter-js/views/index.html'));


});
