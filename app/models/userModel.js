const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Users = new Schema({
    userName : {type : String, require : true},
    password : {type : String, require : true},
    deviceIds:{type:Array}
});

module.exports = mongoose.model('Users', Users);