const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dbConfig = require('./configs/database.config');
const mongoose = require('mongoose');
const chalk=require('chalk');
const socket=require('socket.io');
const Chats = require('./app/models/chat.model');
const route = require('./app/routes/api')
const scheduler=require('./services/notification.services');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");

    // Uncomment to start the scheduler for notification
    // scheduler();
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) =>{
    res.json({message : "Welcom to node server of northStar application"});
});
app.get('/home',(req,res)=>{
    res.send("home page u loggeds")
})

app.use('/api', route);

// const port = process.env.port || 5000
// let server=app.listen(port, ()=>{
//     console.log("Listening on port 5000");
// });

var server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});



// const io=socket(server);

// io.on('connection',(socket)=>{
//     console.log(chalk.bgBlue("client connected!!",socket.id))
    
//     socket.on('user-join',()=>{
//         Chats.find().then(response=>{
//             socket.emit('user-history-chat',response);
//         }).catch(err=>{
//             socket.emit('error');
//         })
        
//     })

//     socket.on('chat-client',(data)=>{
//         let chatEntery=new Chats(data)
//         chatEntery.save()
//         .then(response=>{
//             io.sockets.emit('chat-server',data);
//         }).catch(err=>{
//             socket.emit('error');
//         })
       
//     })

//     socket.on('typing-client',(data)=>{
//         socket.broadcast.emit('typing-server',data);
//     })
   
// })
