"use strict";

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

module.exports = () => {

  // render the registration page
  router.get("/register", (req, res) => {
    res.render('/register');
  });

  // submit registration form
  // add user information to database, set cookie, redirect to home page
  router.post("/register", (req, res) => {
    const username = req.body.username;
    const password = bcrypt.hashSync(req.body.password, 10);
    const email = req.body.email;
    const bio = req.body.bio;

    // create user in db and get the user id
    createUser(username, password, email, bio);
    const userId = getUserId(email);

    req.session.userId = userId;
    res.redirect("/index");
  });

  return router;
}
