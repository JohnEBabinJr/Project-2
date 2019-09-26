var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/bathrooms", function(req, res) {
    db.Jon.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  // Create a new bathroom
  app.post("/api/bathrooms", function(req, res) {
    db.Jon.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  // // Delete an bathroom by id
  // app.delete("/api/bathrooms/:id", function(req, res) {
  //   db.Jon.destroy({ where: { id: req.params.id } }).then(function(data) {
  //     res.json(data);
  //   });
  // });
};
