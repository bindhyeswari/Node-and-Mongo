
// require a library written by the orgs developer

// Modularization of code

var mongo = require('./3 mongo.js');

mongo.users.create({
    name: 'BP',
    email: 'bp@gmail.com'
}, function (err, results) {
    console.log('Saved user ... ');
});