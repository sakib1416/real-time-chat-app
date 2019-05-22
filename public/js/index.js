var socket = io(); //initiates a request to a create web socket
//event listener(connect)
socket.on("connect", () => {
    console.log("Connected to server");
    //emitting event from client
    // socket.emit("createEmail", {
    //     to: "goru@example.com",
    //     text: "Hey"
    // });
    socket.emit("createMessage", {
        from: "Sakib",
        text: "Hey guys"
    });
});
//event listener(disconnect)
socket.on("disconnect", () => {
    console.log("Disconnected from server");
});

//custom event listener, emitted and listening and the callback conatins the data 
// socket.on("newEmail", (email) => {
//     console.log("New Email!", email);
// });
socket.on("newMessage", (message) => {
    console.log(message);
});
