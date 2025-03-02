const express = require("express");
const passport = require("passport");
const router = express.Router();


//@desc   Auth with Google
//Route GET /suth/google

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

//Route GET /google/callback
router.get('/.auth//google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/dashboard');
});

module.exports = router;