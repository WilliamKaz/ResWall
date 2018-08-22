"use strict";

const express = require('express');
const router = express.Router();

module.exports = () => {

  router.get("/", (req, res) => {
    // render the home page
    res.render("index");
  });

  return router;
}
