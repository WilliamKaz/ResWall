"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  const db = require('../db/dbHelpers')(knex);

  // if no query string, redirect to the home page, else render search page with results
  router.get("/", async (req, res) => {
    const resources = await db.getAllResources();
    res.json(resources);
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

    await db.createResource(url, title, description, userId, topicId);
    res.redirect("index");
  });

  // render the edit resource page
  router.get("/:id", async (req, res) => {
    const resourceId = req.params.id;
    const resource = await db.getResource(resourceId);
    res.render("resource", resource);
  });

  // submit the edit resource form
  router.put("/:id", async (req, res) => {
    const resourceId = req.params.id;
    const url = req.body.url;
    const title = req.body.title;
    const description = req.body.description;
    const topicId = req.body.topicid;
    await db.updateResource(resourceId, url, title, description, topicId);
    const resource = await db.getResource(resource_id);
    res.render("resource", resource);
  });

  // delete resource and redirect to the home page
  router.delete("/:id", async (req, res) => {
    const resourceId = req.params.id;
    await db.deleteResource(resourceId);
    res.redirect("index");
  });

  // display all comments
  router.get("/:id/comments", async (req, res) => {
    const resourceId = req.params.id;
    const comments = await db.getComments(resourceId);
    res.render("index", comments);
  });

  // submit comment
  router.post("/:id/comments", async (req, res) => {
    const resourceId = req.params.id;
    const userId = req.session.userId;
    const message = req.body.message;
    await db.createComment(message, userId, resourceId);
    const comments = await db.getComments(resourceId);
    res.render("index", comments);
  });

  router.post("/:id/like", async (req, res) => {
    const userId = req.session.userId;
    const resourceId = req.params.id;
    if (await db.likeExists(userId, resourceId)){
      await db.deleteLike(userId, resourceId);
    } else {
      await db.createLike(userId, resourceId);
    }
    res.redirect("index");
  });

  router.post("/:id/rate", async (req, res) => {
    const userId = req.session.userId;
    const resourceId = req.params.id;
    const stars = req.body.stars;
    if (await db.ratingExists(userId, resourceId)) {
      await db.updateRating(stars, userId, resourceId);
    } else {
      await db.createRating(stars, userId, resourceId);
    }
    await db.updateAverageRating(resourceId);
    res.redirect("index");
  });

  return router;
}
