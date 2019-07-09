var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var db = require("../models");

// Get all data from db
router.get("/", function (req, res) {
  db.burger.findAll({
    include: [db.Burger]
  }).then(function (burger) {
    var hbsObject = {
      burgers: burger
    };
    // render to index handlebars
    res.render("index", hbsObject);
  });
});

// Post to db and refresh page
router.post("/api/burgers", function (req, res) {
  db.burger.create({
    burger_name: req.body.burger_name
  }).then(function () {
    res.redirect("/");
  })
});

// Update by id and refresh page
router.put("/api/burgers/:id", function (req, res) {
  db.burger.update(
    { devoured: true },
    { where: { id: req.body.id } }
  ).then(function () {
    res.redirect("/");
  })
});

// Export routes for server.js to use.
module.exports = router;
