require("dotenv").config();

const express = require("express");

const parser = require("body-parser");

const mongoose = require("mongoose");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const app = express();
app.use(parser.json());
const cors = require("cors");
app.use(cors());
const router = require("./router");
const cRoute = require("./routes/auth");
app.use("/", router);
app.use("/jtcc", cRoute);

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

mongoose.connect(
  process.env.DB_URI,
  { useNewUrlParser: true },
  console.log("Connected to DB!")
);

const io = require("socket.io")({
  cors: {
    credentials: true,
  },
});
app.use(cors());

io.on("connect", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("message", {
      user: "JTCC bot",
      text: `${user.name}, welcome to JTCC ${user.room} community.`,
    });
    socket.broadcast.to(user.room).emit("message", {
      user: "JTCC bot",
      text: `${user.name} has joined the community!`,
    });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "JTCC bot",
        text: `${user.name} has left the community.`,
      });
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`JTCC local server has started on port ${PORT}`)
);
