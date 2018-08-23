"use strict";

const express = require('express');
const router = express.Router();

module.exports = () => {
  // render the login page
  router.get("/", (req, res) => {
    console.log('get request');
    res.render("login");
  });

  // submit login form
  router.post("/", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user_id = getUserId(email);

    // check email and pw against db
    if (checkCredentials(email, password) === true) {
      // logic to be written by Jordan
      // db[userId].email === email && bcrypt.compareSync(password, db[UserId].hashedPassword)

      // set cookie and redirect to home page
      req.session.user_id = user_id;
      res.redirect("index");
    } else {
      // render login page with error message
      const errorLog = {};
      errorLog.error = 'Invalid Credentials';
      res.status(403).render("login", errorLog);
    }
  });
  return router;
}
