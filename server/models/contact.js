//Dhavalbhai Patel
//301240436
//18 June
let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    name: String,
    contactNo : Number,
    emailAdd :String,

},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);