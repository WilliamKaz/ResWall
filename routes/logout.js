"use strict";

const express = require('express');
const router = express.Router();

module.exports = () => {
  // after the user logs out, redirect to the resources page and clear cookie
  router.post("/logout", (req, res) => {
    // req.session = null;
    // res.redirect("/resources/");
  });

  return router;
}
