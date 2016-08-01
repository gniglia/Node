var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.get('/', function(req, res) {
    res.send('this is the root..');
});


app.listen(3000, function() {
    console.log('listening on port 3000...');
});