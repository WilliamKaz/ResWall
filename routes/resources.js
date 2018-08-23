"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  // redirect to the home page
  router.get("/", (req, res) => {
    res.redirect("index");
  });

  // render the create resource page
  router.get("/new", (req, res) => {
    res.render("resources_new");
  });

  // submit the create resource form
  router.post("/new", (req, res) => {
    const url = req.body.url;
    const title = req.body.title;
    const description = req.body.description;
    const user_id = req.session.user_id;
    const topic_id = req.session.topic_id;

    createResource(url, title, description, user_id, topic_id);
    res.redirect("index");
  });

  // render the edit resource page
  router.get("/:id", (req, res) => {
    const resource_id = req.params.id;
    const resource = getResource(resource_id);
    res.render("resource", resource);
  });

  // submit the edit resource form
  router.put("/:id", (req, res) => {
    const resource_id = req.params.id;
    const url = req.body.url;
    const title = req.body.title;
    const description = req.body.description;
    const topic_id = req.body.topic_id;
    updateResource(resourceId, url, title, description, topic_id);
    const resource = getResource(resource_id);
    res.render("resource", resource);
  });

  // delete resource and redirect to the home page
  router.delete("/:id", (req, res) => {
    const resource_id = req.params.id;
    deleteResource(resource_id)
    res.redirect("index");
  });

  // display all comments
  router.get("/:id/comments", (req, res) => {
    const resource_id = req.params.id;
    const comments = getComments(resource_id);
    res.render("index", comments);
  });

  // submit comment
  router.post("/:id/comments", (req, res) => {
    const resource_id = req.params.id;
    const user_id = req.session.user_id;
    const message = req.body.message;
    createComment(message, user_id, resource_id);
    const comments = getComments(resource_id);
    res.render("index", comments);
  });


  // router.get("?search=’search bar text’", (req, res) => {
  // search resource by title, topic or user
  // });
  return router;
}
