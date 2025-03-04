const express = require("express");
const passport = require("passport");
const router = express.Router();


//@desc   Auth with Google
//Route GET /suth/google

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));


//Route GET /google/callback
router.get('/google/callback', (req, res) => {
     passport.authenticate('google', { failureRedirect: '/' }), 
    res.redirect('/dashboard'); 
});

module.exports = router;


