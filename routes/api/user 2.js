const router = require("express").Router();
// Requiring our models and passport as we've configured it
const db = require("../../models");
const passport = require("../../config/passport");

// -> /api/user/test
router.get("/test", (req, res) => {
    res.json(true);
});

// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
// -> /api/user/login
router.post("/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
        email: req.user.email,
        _id: req.user._id
    });
});

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post("/signup", (req, res) => {
    console.log(req.body);
    db.User.create({
        email: req.body.email,
        password: req.body.password
    })
    .then(data => {
        res.json({email: data.email});
    })
    .catch(err => {
        console.log(err);
        res.status(401).json(err);
    });
});

// Route for logging user out
router.get("/logout", (req, res) => {
    req.logout();
    res.json(true);
});

// Route for getting some data about our user to be used client side
router.get("/data", (req, res) => {
    if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
    } else {
        // Otherwise send back the user's email and id
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
            email: req.user.email,
            _id: req.user._id
        });
    }
});
module.exports = router;