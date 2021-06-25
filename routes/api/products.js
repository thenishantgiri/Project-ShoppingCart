const Product = require("../../db").Product;
const route = require("express").Router();

route.get("/", (req, res) => {
  // Get all the products from the database
  Product.findAll()
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((err) => {
      res.status(500).send({
        error: "could not retrive products",
      });
    });
});

route.post("/", (req, res) => {
  // we expect the req to have name, manufacturer, price

  // validating the values
  if (isNaN(req.body.price)) {
    return res.status(403).send({
      error: "Price is not a valid number",
    });
  }
  // Creating new products in our database
  Product.create({
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    price: parseFloat(req.body.price),
  })
    .then((product) => {
      // sending the newly product user to the client
      res.status(201).send(product);
    })
    .catch((err) => {
      res.status(501).send({
        //sending back error to the client, if found
        error: "could not add product",
      });
    });
});

module.exports = route;
