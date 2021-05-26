const router = require("express").Router();
const { User } = require('../../models');

router.get("/", async (req, res) => {
    const user = await User.find({});
    return res.json(user);
});
router.post("/save", async (req, res) => {
    const createUser = await User.create(req.body);
    return res.json(createUser);
});
module.exports = router;
