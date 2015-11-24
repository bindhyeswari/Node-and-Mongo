

// install mongoose to work with mongodb
// connect to mongodb

// create a schema with mongoose

// create a model

// create data using the model and

// save to mongoose

// retrieve the information from mongoose

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: mongoose.SchemaTypes.Mixed // generic object
});

var UserModel = mongoose.model('user', UserSchema);

mongoose.connect('mongodb://localhost/test', function (err) {
    if (err) console.log('There was an error connecting to mongodb!');
    else {
        console.log('Connected to mongodb!');
        // createUser();
        getAllUsers();
    }
});

function createUser() {
    var manali = new UserModel({
        name: 'James Joonso Kim',
        email: 'james@gmail.com',
        address: {
            city: 'Sunnyvale'
        }
    });

    manali.save(function (err, results) {
        console.log(err, results);
    });
}

function getAllUsers() {
    UserModel.find({}, function (err, results) {
        if (err) console.log('Error trying to get the user data ... ');
        else console.log(results);

        var usernames = results.map(function (result) {
            return result.name;
        });

        console.log(usernames);
    });
}








