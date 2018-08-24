"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  const db = require('../db/dbHelpers')(knex);
  
  // render user profile page
  router.get("/:id", async (req, res) => {
    const userId = req.params.id;
    const profile = await db.getProfile(userId);
    res.render("profile", profile);
  });

  // update user profile
  router.put("/:id", async (req, res) => {
    const userId = req.params.id;
    const userName = req.body.username;
    const bio = req.body.bio;

    await updateProfile(userId, userName, bio);
    const profile = await db.getProfile(userId);
    res.render("profile", profile);
  });

  // display all resources created by userid = id
  router.get("/:id/resources", async (req, res) => {
    const userId = req.params.id;
    const resource = await db.getMyResources(userId);
    res.render("resource", resource);
  });

  // display all likes created by userid = id
  router.get("/:id/likes", async (req, res) => {
    const userId = req.params.id;
    const likes = await db.getMyLikes(userId);
    res.render("resource", likes);
  });

  return router;
}
