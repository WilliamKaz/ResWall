"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  // redirect to the home page
  router.get("/", (req, res) => {
    res.redirect("/index");
  });

  // render the create resource page
  router.get("/new", (req, res) => {
    res.render("/resources_new");
  });

  // submit the create resource form
  router.post("/new", (req, res) => {
    const url = req.body.url;
    const title = req.body.title;
    const description = req.body.description;
    const user_id = req.session.user_id;
    const topic_id = req.session.topic_id;

    createResource(url, title, description, user_id, topic_id);
    res.redirect("/index");
  });

  router.put("/:id", (req, res) => {
    // updateResource(resourceId, url, title, description, topic_id) 
  });

  router.delete("/:id", (req, res) => {
    // delete resource
  });

  router.get("?search=’search bar text’", (req, res) => {
    // search resource by title, topic or user
  });

  router.get("/:id/comments", (req, res) => {
    // display all comments
  });

  router.post("/:id/comments", (req, res) => {
    // submit comment
  });

  return router;
}
