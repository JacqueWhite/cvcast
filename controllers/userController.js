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
        console.log("Calling findbyEmail from controllers/userController");
    },

    findAll: function(req, res){
        
        console.log(req.params);
        
        db.User
        .findOne({_id: req.params.id})
        .populate("Project")
        .then(dbModel => {
            console.log("find all user controller");
            console.log(dbModel)
            res.json(dbModel)
        })
        
        .catch(err => res.status(422).json(err));
        console.log("find all called from controllers/userController");
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
};
