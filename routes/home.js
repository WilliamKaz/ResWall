"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  const db = require('../db/dbHelpers')(knex);
 
  // render the home page
  router.get("/", async (req, res) => {
    const resource = await db.getAllResources();
    res.render("index", resource);
  });
  return router;
}
