console.log("userController.js");


const db = require("../models");

module.exports = {
    findAll: function(req, res){
        db.User
        .find(req.query)
        .then(dbModel => {
          console.log(dbModel);
          res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
        console.log("find all called from controllers/userController");
    },
    findById: function(req, res) {
    db.User
        .findById(req.params.id)
        .then(dbModel => {
                  console.log(dbModel);
                  res.json(dbModel);
                })
        .catch(err => res.status(422).json(err));
        console.log("Calling findById from controllers/userController");
    },
    findByEmail: function(req, res) {
    db.User
        .findOne({email: req.params.email })
        .then(dbModel => {
                  console.log(dbModel);
                  res.json(dbModel);
                })
        .catch(err => res.status(422).json(err));
        console.log("Calling findbyEmail from controllers/userController");
    },
    create: function(req, res) {
    db.User
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
    db.User
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    addkeytag: function(req,res){
    db.User
        .findOneAndUpdate({_id: req.params.id}, {$push: {"technologiesKeywords": req.body}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    // db.places.update({"country": "Morocco"}, {$push: {"majorcities":"Agadir"}})

    remove: function(req, res) {
    db.User
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};
