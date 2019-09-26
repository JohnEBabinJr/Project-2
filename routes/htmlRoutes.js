var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(data) {
      res.render("index", {
        example: data
      });
    });
  });

  //Load Submit Page
  app.get("/submit", function(req, res) {
    res.render("submit", {});
  });

  // Load individual
  app.get("/bathroom/:id", function(req, res) {
    db.Jon.findOne({ where: { id: req.params.id } }).then(function(data) {
      res.render("bathroom", {
        example: data
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
