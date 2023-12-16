// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here

// Import the necessary modules here

// Write your code here

// Create a server using NodeJS.

// Creating a Node.js HTTP Server

//1. including library/ module

const http = require('http');

//2. create server

const server = http.createServer((req , res)=>{
    res.end('Response received at port 8080');
});

//3.listen
server.listen(8080 , ()=>{
    console.log('Response received at port 8080')
});

module.exports = server;
