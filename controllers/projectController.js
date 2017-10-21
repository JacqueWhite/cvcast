console.log("projectController.js");
const db = require("../models");

module.exports = {
    findAll: function(req, res){
    db.Project
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

        console.log("find all from controllers/projectController");
    },
    findById: function(req, res) {
    db.Project
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
    console.log("OH NO ROBOTS, THE SEQUEL");
    console.log(req.body);    
    db.Project
        .create(req.body)
        .then(dbModel => {
            console.log("This is the dbModel" + dbModel)
            db.User
            .findOneAndUpdate({ 'email': req.body.userid }, {$push: {"Project": dbModel._id }})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
            })
            
        // res.json(dbModel))
        // .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
    db.Project
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    addkeytag: function(req,res){
    db.Project
        .findOneAndUpdate({_id: req.params.id}, {$push: {"technologiesKeywords": req.body}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    // db.places.update({"country": "Morocco"}, {$push: {"majorcities":"Agadir"}})

    remove: function(req, res) {
    db.Project
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};
