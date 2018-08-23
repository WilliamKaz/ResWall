"use strict";

require('dotenv').config();

const knex = require('knex')({
  client: 'postgresql',
  connection: {
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
    port     : process.env.DB_PORT,
    ssl      : process.env.DB_SSL
  },
});


module.exports = function makeDataHelpers(knex) {
  return {

    createUser: (username, password, email, bio) => {
      knex('users').insert({
        username,
        password,
        email,
        bio
      }).then(()=>{});
    },

    checkCredentials: (email, password) => {
      knex('users').count('email')
      .where('email', email)
      .then((result) => {return (result[0].count === '1')})
      .catch((err)=>{console.log(err)});
    },

    getUserId: (email) => {
      knex.select('id').from('users')
      .where('email', email)
      .then((result)=>{return (result[0].id)})
      .catch((err)=>{console.log(err)});
    },

    saveTweet: function(newTweet, callback) {
      db.collection("tweets").insertOne(newTweet, (err) => {
        callback(err);
      });
    },

    saveTweet: function(newTweet, callback) {
      db.collection("tweets").insertOne(newTweet, (err) => {
        callback(err);
      });
    },

    getTweets: function(callback) {
      const sortNewestFirst = (a, b) => b.created_at - a.created_at;
      db.collection("tweets").find().toArray( (err, array) => {
        callback(err, array.sort(sortNewestFirst));
      });
    }

  };
}
