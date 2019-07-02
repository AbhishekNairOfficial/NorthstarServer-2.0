const notification = require('../app/controllers/notification.controller');
var cron = require('cron');
const User = require('../app/models/userModel');

let userList;
async function startScheduler(){
     userList= await User.find();
    cronJob.start();
}
// User.find().then((userlist) =>console.log(userlist))
// .catch((err) => console.log(err))

var cronJob = cron.job("*/20 * * * * *", function () { // perform operation e.g. GET request http.get() etc.
    userList.forEach(item => {
        notification.SchedulerController({userName:item.userName,title:"Testing..",body:"Testing...."});
    });
    
});

module.exports=startScheduler;