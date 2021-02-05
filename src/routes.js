const express = require("express");

const router = express.Router();

// const users = ["juan", "pedro", "nicolas", "laura"];

// router.get("/users", (req, res) => {
//   res.send(users);
// });

// router.post("/users", express.json(), (req, res) => {
//   users.push(req.body.user);
//   res.send(users);
// });

// router.get("/users", (req, res) => {
//   const usersPromise = Users.findAll();
//   const posteosPromise = Posteos.findAll();

//   Promise.all([usersPromise, posteosPromise]).then((users) => {
//     res.send(users);
//   });

//   console.log("final");
// });

// router.get("/users/:id", async (req, res) => {
//   const user = await Users.findByPk(req.params.id);
//   const posts = await Posteos.findPostsByUser(user);

//   const response = await Promise.all([usersPromise, posteosPromise]);

//   res.send(response);
// });

module.exports = router;
