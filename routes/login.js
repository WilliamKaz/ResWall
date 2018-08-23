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
    const email = req.body.email;
    const password = req.body.password;
    const userId = getUserId(email);

    // check email and pw against db
    if (checkCredentials(email, password) === true) {
      // logic to be written by Jordan
      // db[userId].email === email && bcrypt.compareSync(password, db[UserId].hashedPassword)

      // set cookie and redirect to home page
      req.session.userId = userId;
      res.redirect("/index");
    } else {
      // render login page with error message
      const errorLog = {};
      errorLog.error = 'Invalid Credentials';
      res.status(403).render("/login", errorLog);
    }
  });
  return router;
}
