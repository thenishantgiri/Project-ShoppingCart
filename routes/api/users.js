// fetching the User Table/class from database
const User = require("../../db").User;
const route = require("express").Router();

route.get("/", (req, res) => {
  // we want to send an array of all users
  // from our database here

  User.findAll()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      res.status(500).send({
        error: "could not retrive users",
      });
    });
});

route.post("/", (req, res) => {
  // we expect the req to have name
  // we will create a new user (from the req recieved from the client)

  // creating a user
  User.create({
    name: req.body.name,
  })
    .then((user) => {
      // sending the newly created user to the client
      res.status(201).send(user);
    })
    .catch((err) => {
      //sending back error to the client, if found
      res.status(501).send({ error: "could not add new user" });
    });
});

module.exports = route;
