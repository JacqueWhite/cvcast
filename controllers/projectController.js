const db = require("../models");

module.exports = {

    //  get all projects 
    // findAll: function(req, res){
    // db.Project
    //     .find(req.query)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));

    //     console.log("find all from controllers/projectController");
    // },

    // find specific project by id
    findById: function(req, res) {
    db.Project
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    // create a new project 
    create: function(req, res) {
    console.log(req.body);
    db.Project
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    // update/edit project by id
    update: function(req, res) {
    db.Project
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    // add a technology tag to a project- push new term into araay
    // addkeytag: function(req,res){
    // db.Project
    //     .findOneAndUpdate({_id: req.params.id}, {$push: {"technologiesKeywords": req.body}})
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },
  
    // delete a project 
    remove: function(req, res) {
    db.Project
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }

};
