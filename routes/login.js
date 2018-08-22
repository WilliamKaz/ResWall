"use strict";

const express = require('express');
const router = express.Router();

module.exports = () => {
  
  // render the login page
  router.get("/login", (req, res) => {
    res.render("/login");
  });

  // submit login form
  router.post("/login", (req, res) => {
    // check if username exists in the database, if yes, check if user/pw from HTML matches the database, if user/pw match db
    // set cookie session
    // req.session.user_id = TBD;
    // redirect to the resources page
    // res.redirect("/resources");
  });

  return router;
}
