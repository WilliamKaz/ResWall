"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  // if no query string, redirect to the home page, else render search page with results
  router.get("/", async (req, res) => {
    if (req.query.keyword = undefined) {
      res.redirect("index");
    } else {
      const searchTerm = req.query.keyword;
      const searchResult = await searchResources(searchTerm);
      res.render("search_result", searchResult);
    }
  });

  // render the create resource page
  router.get("/new", (req, res) => {
    res.render("postForm");
  });

  // submit the create resource form
  router.post("/new", async (req, res) => {
    const url = req.body.resURL;
    const title = req.body.title;
    const description = req.body.description;
    const userId = req.session.userId;
    const topicId = req.body.topic;

    await createResource(url, title, description, userId, topicId);
    res.redirect("index");
  });

  // render the edit resource page
  router.get("/:id", async (req, res) => {
    const resourceId = req.params.id;
    const resource = await getResource(resourceId);
    res.render("resource", resource);
  });

  // submit the edit resource form
  router.put("/:id", async (req, res) => {
    const resourceId = req.params.id;
    const url = req.body.url;
    const title = req.body.title;
    const description = req.body.description;
    const topicId = req.body.topicid;
    await updateResource(resourceId, url, title, description, topicId);
    const resource = await getResource(resource_id);
    res.render("resource", resource);
  });

  // delete resource and redirect to the home page
  router.delete("/:id", async (req, res) => {
    const resourceId = req.params.id;
    await deleteResource(resourceId)
    res.redirect("index");
  });

  // display all comments
  router.get("/:id/comments", async (req, res) => {
    const resourceId = req.params.id;
    const comments = await getComments(resourceId);
    res.render("index", comments);
  });

  // submit comment
  router.post("/:id/comments", async (req, res) => {
    const resourceId = req.params.id;
    const userId = req.session.userId;
    const message = req.body.message;
    await createComment(message, userId, resourceId);
    const comments = await getComments(resourceId);
    res.render("index", comments);
  });

  router.post("/:id/like", async (req, res) => {
    const userId = req.session.userId;
    const resourceId = req.params.id;
    await toggleLike(userId, resourceId);
    res.redirect("index");
  });

  router.post("/:id/rate", async (req, res) => {
    const userId = req.session.userId;
    const resourceId = req.params.id;
    const stars = req.body.stars;
    await createOrUpdateRating(stars, userId, resourceId);
    res.redirect("index");
  });
  
  return router;
}
