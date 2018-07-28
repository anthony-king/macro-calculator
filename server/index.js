var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mongo/index.js')
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var profiles = require('../database-mongo');

var app = express();
// I could not with any confidence explain what these next two lines do
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// these routes should cover the following user scenarios

//  user hit save profile button, this should take the profile information and post it to the database
  // this should also add the profile to the page
//  user visits website, serves up index page-- is this included automatically?
  // a visit to / should fetch all profiles from the db and display them
//  **if time**user clicks on profile button, this should display the profile in the main area

app.post('/save', function(req, res) {
  var profileData = {
    name: req.body.name,
    sex: req.body.sex,
    weight: req.body.weight,
    goal: req.body.goal,
    rec_calories: req.body.calories,
    rec_protein: req.body.protein,
    rec_carbs: req.body.carbs,
    rec_fat: req.body.fat
  };

  db.save(profileData);
});

app.get('/', function(req, res) {
  console.log('from get / inside the server/index.js')
  db.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      console.log('from get /', data);
      res.json(data);
    }
  });
});

app.listen(8080, function() {
  console.log('listening on port 8080!');
});

