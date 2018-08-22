"use strict";

const express = require('express');
const router = express.Router();

module.exports = () => {

  // render the registration page
  router.get("/register", (req, res) => {
    res.render('register');
  });

  // submit registration form
  router.post("/register", (req, res) => {

    // add user information to database, set cookie, redirect to resources page
    // db.users.username = req.body.username;
    // db.users.password = bcrypt.hashSync(req.body.password, 10);
    // db.users.email = req.body.email;
    // db.users.bio = req.body.bio;
    // db.req.session.user_id = TBD;
    // db.res.redirect("/resources/");
  });

  return router;
}
