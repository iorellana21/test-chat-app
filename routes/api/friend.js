const router = require("express").Router();
const { Friend } = require('../../models');
// Matches with "/api/books"
router.get("/", async (req, res) => {
  const friend = await Friend.find({});
   return res.json(friend);
});
router.post("/", async (req, res) => {
  const createFriend = await Friend.create(req.body);
  return res.json(createFriend);
});
module.exports = router;