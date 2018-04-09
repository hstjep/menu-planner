var express = require("express");
const app = express();
var mongoose = require('mongoose');
var bodyParser = require("body-parser");


mongoose.connect('mongodb://localhost/menu-plan', function (err, res) {
  if (err) {
    console.log ('ERROR connecting to db: ' + err);
  } else {
    console.log ('Successfully connected to db.');
  }
});


var food = require('./routes/food');
var foodCategory = require('./routes/foodCategory');
var file = require('./routes/file');
const path = require('path');

// app.get('/*', function(req, res) {   
//   res.sendFile(path.join(__dirname, 'path/to/your/index.html'), function(err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.render('./../app/index.ejs', {});
})
.use(express.static(__dirname + './../app'))

app.get("/api", (req, res) => {
    res.send({ message: "Server route!" });
});

app.use('/api/food', food);
app.use('/api/food-category', foodCategory);
app.use('/api/file', file);

export default app;
