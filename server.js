require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const server = require("http").createServer();
const io = require("socket.io")(server, {
    cors: {
      origin: "*",
    },
  });
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const SOCKET_IO_PORT = 4000;

// Requiring passport as we've configured it
const session = require("express-session");
const passport = require("./config/passport");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "the secret that always changes", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// setting up socket.io 
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
io.on("connection", (socket) => {
  console.log(`Client ${socket.id} connected`);
  // Join a conversation
  const { id } = socket.handshake.query;
  socket.join(id);
  // Listen for new messages
  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    io.in(id).emit(NEW_CHAT_MESSAGE_EVENT, data);
  });
  // Leave the room if the user closes the socket
  socket.on("disconnect", () => {
    console.log(`Client ${socket.id} diconnected`);
    socket.leave(id);
  });
});


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true });

// Testing on local host first
mongoose.connect("mongodb://localhost/proj3");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// Server for socket io
server.listen(SOCKET_IO_PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
