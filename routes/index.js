const express = require("express");
const router = express.Router();

//looks for templates viwes responds(res) with file with render method
router.get("/", (req, res) => {
  res.render("login", {
    layout: "login",
  });
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard", {
     layout: 'dashboard',
     });
});

module.exports = router;
