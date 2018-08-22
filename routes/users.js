"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/:id", (req, res) => {
    // view user profile
  });

  router.put("/:id", (req, res) => {
    // update user profile
  });

  router.get("/:id/resources", (req, res) => {
    // display all resources crated by user = id
  });

  router.get("/:id/likes", (req, res) => {
    // display all resources created by user = id
  });

  return router;
}
