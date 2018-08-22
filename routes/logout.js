"use strict";

const express = require('express');
const router = express.Router();

module.exports = () => {

  router.get("/logout", (req, res) => {
    // logout user
  });

  return router;
}
