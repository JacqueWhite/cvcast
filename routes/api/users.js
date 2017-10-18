console.log("routes/api/users.js page");

const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/main"
router
  .route("/")
  // .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/main/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;



// I left routes commented out until we build out those routes more. They will throw errors. 