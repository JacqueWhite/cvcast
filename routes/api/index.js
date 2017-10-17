const router = require("express").Router();
const userRoutes = require("./users.js");
const projectsRoutes = require("./projects.js");

// Book routes
router.use("/user", userRoutes);
router.use("/projects", projectsRoutes);

module.exports = router;
