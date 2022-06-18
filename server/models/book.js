let mongoose = require('mongoose');

// create a model class
let userModel = mongoose.Schema({
    name: String,
    contactNo : Number,
    emailAdd :String,

},
{
    collection: "users"
});

module.exports = mongoose.model('User', userModel);