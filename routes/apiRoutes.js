var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/Jons", function(req, res) {
    db.Jon.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  // Create a new bathroom
  app.post("/api/Jons", function(req, res) {
    db.Jon.create({
      locationName: req.body.locationName,
      address: req.body.address,
      description: req.body.description,
      rating: req.body.rating,
      cleanlinessRating: req.body.cleanlinessRating,
      genderNeutral: req.body.genderNeutral,
      handicap: req.body.handicap,
      multiPly: req.body.multiPly,
      alwaysOpen: req.body.alwaysOpen,
      mChanging: req.body.mChanging,
      fChanging: req.body.fChanging,
      airDryer: req.body.airDryer,
      itsLit: req.body.itsLit,
      feminineProducts: req.body.feminineProducts
    }).then(function(data) {
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
