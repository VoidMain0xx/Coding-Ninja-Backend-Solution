// No need to change the pre-written code
// Implement the features in io.on() section
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

export const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log("Connection made.");

    // Write your code here
    socket.on("join" , (data) =>{
        socket.emit("message",{ text : `Welcome, ${data.username}!`})

        socket.broadcast.to(data.room).emit("message" , {
            text : `${data.username} has Joined the room`
        })
        
        socket.ji=oin(data.room);
    })

    socket.on("sendMessage" , async (data) => {
        io.to(data.room).emit("message" , {
            username: data.username,
            text: data.message
        })
    })
    

    socket.on("disconnect", () => {
        console.log("Connection disconnected.");
    });
});


