<<<<<<< HEAD
console.log("routes/api/users.js page");
const multer = require('multer')
const router = require("express").Router();
const userController = require("../../controllers/userController");

router  
  .route("/id/:id")
  .get(userController.findAll);

router
  .route("/signup")
  .post(multer().single('headshot'), userController.create);
  
  // .catch(err => res.status(422).json(err)); //Errors out...

// Matches with "/api/user/:email
router
  .route("/:email")
  .get(userController.findByEmail)
  .put(userController.update)
  // .delete(userController.remove);

module.exports = router;


