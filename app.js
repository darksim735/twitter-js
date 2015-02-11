var express = require('express');
var app = express();

var logger = require('morgan');
app.use(logger('dev'));

app.listen(3000);

app.get('/', function(req, res){
    res.send('Hello World');
});
