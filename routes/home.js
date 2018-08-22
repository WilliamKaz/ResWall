"use strict";

const express = require('express');
const router = express.Router();

module.exports = () => {

  // redirect to the page that displays all resources
  router.get("/", (req, res) => {
    res.redirect("/resources/");
  });
  
  return router;
}