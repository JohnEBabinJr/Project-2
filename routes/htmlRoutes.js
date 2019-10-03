var db = require("../models");
var path = require("path");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Jon.findAll({}).then(function (data) {
      res.render("index", {
        Jon: data
      });
    });
  });

  //Load Submit Page
  app.get("/submit", function (req, res) {

    res.render("submit");
  });

  app.get("/about", function (req, res) {

    res.render("about");
  });

  // Load individual
  app.get("/Jon/:id", function (req, res) {
    db.Jon.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (data) {
      res.render("bathroom", {
        Jon: data
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};