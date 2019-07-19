var db = require("../models");

module.exports = function(app) {
  // Find all users and return to user as a json object
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Find one user with id in req.params.id and return as json object
  app.get("/api/users/:firebaseId", function(req, res) {
    db.User.findOne({
      where: {
        firebaseId: req.params.firebaseId
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Adds a new user to the model in mysql
  app.post("/api/users", function(req, res) {
    var firebaseId = req.body.firebaseId;
    db.User.create({
      firebaseId: firebaseId,
      username: req.body.username
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
