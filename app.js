const http = require("http"); //built in node_modules to create server
const express = require("express");
const socketIO = require("socket.io");
const app = express();
var server = http.createServer(app); //need to create this server to get socket.io support
var io = socketIO(server); //configuring the server to also use socket.io, with this we will communicate with server and client
app.use(express.static(__dirname + "/public"));

//event listener(connection)
io.on("connection", (socket) => {

    console.log("New user connected");

    //when a client sends a message(createMessage) from a different tab we listen it and then emit(newMessage) it to everyone else 
    socket.on("createMessage", (message) => {
        console.log(message);
        io.emit("newMessage", {
            from: message.from,
            text: message.text,
            createdAt: Date.now()
        });
    });
    
    socket.on("disconnect", () => {
        console.log("User was disconnected");
    });
    //creating an Event
    // socket.emit("newEmail", {
    //     from: "sakib1416@gmail.com",
    //     to: "sakibrahman1114@gmail.com",
    //     text: "Hello there!"
    // });
    //custom event listener
    // socket.on("createEmail", (email) => {
    //     console.log("Create Email", email);
    // });
    // socket.emit("newMessage", {
    //     from: "Maz",
    //     text: "What's up?",
    //     createdAt: 123
    // });
});

//server.listen allows us to use socket.io 
server.listen(process.env.PORT || 3000, () => {
    console.log("Server has started");
});