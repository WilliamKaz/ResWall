"use strict";

const express = require('express');
const router = express.Router();

module.exports = () => {

  // render the home page
  router.get("/", async (req, res) => {
    res.render("index");
  });
  return router;
}
