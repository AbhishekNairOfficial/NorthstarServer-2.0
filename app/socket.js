const chalk=require('chalk');
const socket=require('socket.io');


//socket setup
const io=socket(global.sever);
console.log("connected",global.sever);
io.on('connection',(socket)=>{
    console.log(chalk.bgBlue("client connected!!",socket.id))
    socket.on('chat-client',(data)=>{
        io.sockets.emit('chat-server',data);
    })

    socket.on('typing-client',(data)=>{
        socket.broadcast.emit('typing-server',data);
    })
   
})