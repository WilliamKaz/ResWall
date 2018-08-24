"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
// const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const cookieSession = require('cookie-session');

// const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const loginRoutes = require("./routes/login");
const logoutRoutes = require("./routes/logout");
const registerRoutes = require("./routes/register");
const resourcesRoutes = require("./routes/resources");
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/styles", sass({
//   src: __dirname + "/styles",
//   dest: __dirname + "/public/styles",
//   debug: true,
//   outputStyle: 'expanded'
// }));
app.use(express.static("public"));

// cookie session
app.use(cookieSession({
  name: 'session',
  keys: ['userId']
}));

// Mount all resource routes
app.use("/login", loginRoutes());
app.use("/logout", logoutRoutes());
app.use("/register", registerRoutes());
app.use("/resources", resourcesRoutes());
app.use("/users", usersRoutes());

// Home page
app.get("/", async (req, res) => {
  const resource = await getAllResources();
 
  for (post of resource) {
    let averageRating = await getAverageRating(resource[post].id);
    resource[post].averageRating = averageRating;
  }

  res.render("index", resource);
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
