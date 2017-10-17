const router = require("express").Router();
const userRoutes = require("./users.js");

// Book routes
router.use("/user", userRoutes);

module.exports = router;
