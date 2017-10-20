const db = require("../models");

module.exports = {

    // find user by email
    findByEmail: function(req, res) {
    db.User
        // .findOne({ email: req.params.email })
        // this needs to be changed back to req.params.email
        .findOne({ email: req.body})
        .then(dbModel => {
                  console.log(dbModel);
                  res.json(dbModel);
                })
        .catch(err => res.status(422).json(err));
        console.log("Calling findbyEmail from controllers/userController");
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
