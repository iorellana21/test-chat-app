const router = require("express").Router();
const friendRoutes = require("./friend");
const userRoutes = require("./user");

// User routes /api/user*
router.use("/user", userRoutes);

// Friend routes /api/friend*
router.use("/friend", friendRoutes);
module.exports = router;

