"use strict";

const express = require('express');
const router = express.Router();

module.exports = () => {

  router.get("/register", (req, res) => {
    // render the registration page
  });

  router.post("/register", (req, res) => {
    // submit registration form
  });

  return router;
}
