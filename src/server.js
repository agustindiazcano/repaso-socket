const express = require("express");
const volleyball = require("volleyball");
const socketio = require("socket.io");

const routes = require("./routes");

const app = express();

app.use(volleyball); // loggea request

app.use(express.static(__dirname + "/public"));
// app.use(routes);

const users = ["juan", "pedro", "nicolas", "laura"];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", express.json(), (req, res) => {
  users.push(req.body.user);
  res.send(users);
});

const PORT = 3000;

const server = app.listen(PORT, () =>
  console.log(`Server listening at port ${PORT}`)
);

const io = socketio(server);

io.on("connection", function (socket) {
  console.log("NEW CONNECTION!");

  socket.on("newUser", function (data) {
    console.log("DATA", data);

    users.push(data.user);

    socket.broadcast.emit("updateList", { users: users });
  });
});
