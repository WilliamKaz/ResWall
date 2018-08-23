"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    // render all resources
    res.render("/index");
  });

  router.get("/new", (req, res) => {
    // render the create resource page
    res.render("/resources_new");
  });

  router.post("/new", (req, res) => {
    // submit the create resource form
  });

  router.put("/:id", (req, res) => {
    // update resource
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
