console.log("routes/api/users.js page");

const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router
  .route("/signup")
  .post(userController.create);
  
  // .catch(err => res.status(422).json(err)); //Errors out...

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;



// I left routes commented out until we build out those routes more. They will throw errors.
