"use strict";

const express = require('express');
const router = express.Router();

module.exports = () => {

  router.get("/login", (req, res) => {
    // display the login page
  });

  router.post("/login", (req, res) => {
    // submit login form
  });

  return router;
}
