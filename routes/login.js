"use strict";

const express = require('express');
const router = express.Router();

module.exports = () => {
  
  // render the login page
  router.get("/login", (req, res) => {
    res.render("/login/");
  });

  // submit login form
  router.post("/login", (req, res) => {
    // check if username exists in the database, if yes, check if user/pw from HTML matches the database, if user/pw match db

    req.body.email

    // set cookie session and redirect to resources page
    // req.session.user_id = TBD;
    // res.redirect("/resources");
  });

  return router;
}
