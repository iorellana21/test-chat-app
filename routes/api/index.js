const router = require("express").Router();
const friendRoutes = require("./friend");
// Friend routes /api/friend*
router.use("/friend", friendRoutes);
module.exports = router;