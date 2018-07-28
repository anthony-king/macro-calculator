var mongoose = require('mongoose');
var exampleProfileData = require('../exampleProfileData.js')
mongoose.connect('mongodb://localhost/nutrition-calculator');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var profileSchema = mongoose.Schema({
  name: { type: String, unique: true },
  weight: Number,
  goal: String,
  rec_calories: Number,
  rec_protein: Number,
  rec_carbs: Number,
  rec_fat: Number
});

var Profile = mongoose.model('Profile', profileSchema);

var serverSideSave = (profileData) => {
  var profile = new Profile(profileData);
  profile.save().then((err, profile) => {
    if (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        return res.status(500).send({ succes: false, message: 'User already exist!' });
      } else {
      return console.error(err)
      }
    } else {
      console.log('no error')
    }
  })
};

var selectAll = function(callback) {
  Profile.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.save = serverSideSave;