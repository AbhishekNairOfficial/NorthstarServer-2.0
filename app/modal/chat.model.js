const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ChatSchema = new Schema({
    userId : {type : String, require : true},
    message:{type:String,require:true}
});

module.exports = mongoose.model('Chats', ChatSchema);