console.log("routes/api/projects.js page");

const router = require("express").Router();
const projectController = require("../../controllers/projectController");

// Matches with "/api/main"
router
  .route("/")
  .get(projectController.findAll)
  .post(projectController.create);

// Matches with "/api/main/:id"
router
  .route("/:id")
  .get(projectController.findById)
  .put(projectController.update)
  .delete(projectController.remove);

module.exports = router;



// I left routes commented out until we build out those routes more. They will throw errors. 