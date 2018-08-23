"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  
  // render user profile page
  router.get("/:id", (req, res) => {
    const user_id = req.params.id;
    const profile = getProfile(user_id);
    res.render("profile", profile);
  });

  // update user profile
  router.put("/:id", (req, res) => {
    const user_id = req.params.id;
    const username = req.body.username;
    const bio = req.body.bio;

    updateProfile(user_id, username, bio);
    const profile = getProfile(user_id);
    res.render("profile", profile);
  });

  // display all resources created by userid = id
  router.get("/:id/resources", (req, res) => {
    const user_id = req.params.id;
    const resource = getMyResources(user_id);
    res.render("resource", resource);
  });

  // display all likes created by userid = id
  router.get("/:id/likes", (req, res) => {
    const user_id = req.params.id;
    const likes = getMyLikes(user_id);
    res.render("resource", likes);
  });

  return router;
}
