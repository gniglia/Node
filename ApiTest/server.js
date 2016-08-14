var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var mongoose = require('mongoose');
var Category = require('./models/category');

// CONNECT TO MONGOOSE
var db = mongoose.connect('mongodb://localhost:27017/musicstore');


// ROUTES FOR THE API
app.get('/', function(req, res) {
    res.send('this is the root..');
});

app.get('/categories', function(req, res) {
    Category.getCategories(function(err, categories) {
      if (err) {
        res.send('an error has ocurred');
      } else {
        res.json(categories);
      }
    });
});

app.get('/categories/:id', function(req, res) {
    Category.getCategoryById(req.params.id, function(err, category) {
      if (err) {
        res.send('an error has ocurred');
      } else {
        res.json(category);
      }
    });
});

// START THE SERVER
app.listen(3000, function() {
    console.log('listening on port 3000...');
});
