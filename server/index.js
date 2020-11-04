const express= require('express');
const http=require('http');
const socketIo=require('socket.io');
const router = require('./router'); 
const cors = require('cors');

const port=process.env.PORT||5000;
const app=express();
const server=http.createServer(app);
const io=socketIo(server);

app.use(cors());
app.use(router);

io.on('connection',(socket)=>{
    console.log("Connection established!");

    socket.on("newCalculation", data => {
        io.emit("newCalculation", data);
      });
})

server.listen(port,()=>{
  console.log('Server is up');
})
















