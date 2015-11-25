

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
        // getAllUsers();
        // var id = '5654ed2ff6126f388bd21bd4';
        /*updateUser(id, {
            email: 'james.kim@gmail.com'
        });*/
        // deleteUser('5654ed2ff6126f388bd21bd4');

    }
});

function createUser(data, callback) {
    /*var manali = new UserModel({
        name: 'James Joonso Kim',
        email: 'james@gmail.com',
        address: {
            city: 'Sunnyvale'
        }
    });*/

    (new UserModel(data)).save(function (err, results) {
        console.log(err, results);
        callback(err, results);
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

// partial updates
function updateUser(_id, updates) {
    UserModel.findByIdAndUpdate(_id, {
        $set: updates
    }, function (err, results) {
        if (err) console.log('There was an error updating the object.', err);
        else console.log('The element ', _id, ' was successfully updated.');
    });
}

function deleteUser(_id) {
    UserModel.findByIdAndRemove(_id, function (err, res) {
        if (err) console.log('There was an error deleting the object.', err);
        else console.log('The element ', _id, ' was successfully deleted.', res);
    })
}

module.exports = {
    users: {
        create: createUser,
        get: getAllUsers,
        update: updateUser,
        delete: deleteUser
    }
};








