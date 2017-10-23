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
      console.log("request:");
      console.log(req.body.ownerID);
      db.Project
        .create(req.body)
        .then(dbModel => {
          console.log("created project " + dbModel);
          console.log("ownerID " + req.body.ownerID);

          db.User
          // .find({_id: req.body.ownerID})
          .findOneAndUpdate({ _id: req.body.ownerID }, {$push: { "Project": dbModel._id }})
          .then(dbModel => {
            console.log(dbModel);
            // console.log("Added project to user " + dbModel);
            res.json(dbModel)
          })

          .catch(err => res.status(422).json(err));
          })
      },
    update: function(req, res) {
      db.Project
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => {
          console.log(dbModel);
          res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
      },
    addkeytag: function(req,res){
      db.Project
        .findOneAndUpdate({_id: req.params.id}, {$push: {"technologiesKeywords": req.body}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      },
    remove: function(req, res) {
      console.log("-----------");
      console.log("params");
      console.log(req.params);
      console.log("-----------");
      //HAVE projectId and userId
      db.Project
        .findById({ _id: req.params.projectId })
        .then(dbModel => dbModel.remove())
        .then(dbModel => {
          // console.log(req.params.userId, req.params.projectId);
          db.User
            .findOneAndUpdate({ _id: req.params.userId }, {$pull: {"Project": req.params.projectId}})
            .then(userdbModel => res.json(userdbModel))
            .catch(err => res.status(422).json(err));
        })
        .catch(err => res.status(422).json(err));
    }
};
