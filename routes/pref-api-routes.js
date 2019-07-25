var db = require("../models");

module.exports = function(app) {
  app.get("/api/pref/:id", function(req, res) {
    var query = {
      id: req.params.id
    };
    db.Pref.findAll({
      where: query
    }).then(function(dbPref) {
      res.json(dbPref);
    });
  });

  app.post("/api/pref", function(req, res) {
    debugger;
    db.Pref.upsert(req.body).then(function(dbPref) {
      res.json(dbPref);
    });
  });
};
