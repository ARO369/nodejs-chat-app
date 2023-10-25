const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");
const mysql = require("mysql2");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const users = {};

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "arosqlroot",
  database: "chatappdb",
});

// Socket io
io.on("connection", (socket) => {
  socket.on("user-name", (name) => {
    users[socket.id] = name;
    socket.broadcast.emit("user-joined", name);
  });

  socket.on("user-message", (message, sender) => {
    io.emit("message", message, sender);

    // Save message to database
    const query = "INSERT INTO messages (sender, message) VALUES (?, ?)";
    const values = [sender, message];

    db.query(query, values, (error, results) => {
      if (error) {
        console.error("Failed to save message:", error);
      } else {
        console.log("Message saved:", results);
      }
    });
  });
});

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  return res.sendFile("/public/index.html");
});

server.listen(4000, () => {
  console.log("server is running");
});
