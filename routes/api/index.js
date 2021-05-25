const router = require("express").Router();
const friendRoutes = require("./friend");

const userRoutes = require("./user");




// Friend routes /api/friend*
router.use("/friend", friendRoutes);


router.use("/user", userRoutes);



module.exports = router;