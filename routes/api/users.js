console.log("routes/api/users.js page");

const router = require("express").Router();
const mainController = require("../../controllers/mainController");

// Matches with "/api/main"
router
  .route("/")
  .get(mainController.findAll)
  .post(mainController.create);

// Matches with "/api/main/:id"
router
  .route("/:id")
  .get(mainController.findById)
  .put(mainController.update)
  .delete(mainController.remove);

module.exports = router;



// I left routes commented out until we build out those routes more. They will throw errors. 