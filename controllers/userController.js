const db = require("../models");

module.exports = {

    // find user by email
    findByEmail: function(req, res) {
    db.User
        .findOne({ email: req.params.email})
        .then(dbModel => {
                  res.json(dbModel);
                })
        .catch(err => res.status(422).json(err));
    },

    findAll: function(req, res){
        db.User
        .findOne({_id: req.params.id})
        .populate("Project")
        .then(dbModel => {
            res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));
    },

    // create a new user
    create: function(req, res) {
    db.User
        .create(req.body)
        .then(function(data){
            res.json(data);
        })
        .catch(err => res.status(422).json(err));
    },

    // update user profile
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

    remove: function(req, res) {
    db.User
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};
