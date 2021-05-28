const router = require("express").Router();
const { User, Friend } = require('../../models');


router.get("/user/:name", async (req, res) => {
    const user = await User.find({ username: req.params.name });
    return res.json(user);
});

router.get("/", async (req, res) => {
    const user = await User.find({});
    return res.json(user);
});

router.get('/get-friends/:name', async (req,res) => {
    const user = await User.find({ username: req.params.name })
    const userId = user[0]._id
    const friend = await Friend.find({ userId })

    return res.json(friend);
})

router.post("/save", async (req, res) => {
    const createUser = await User.create(req.body);
    return res.json(createUser);
});

module.exports = router;
