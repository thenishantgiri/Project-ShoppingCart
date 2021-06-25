const route = require("express").Router();

route.use("/users", require("./users.js"));
route.use("/products", require("./products.js"));

module.exports = route;
