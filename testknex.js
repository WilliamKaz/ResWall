'use strict'

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

const helper = require('./knex_script.js')(knex);
helper.createUser('userj','passj','jmail','jio');

// const test = async function (resource_id) {
//   return await
//   knex('ratings').avg('stars')
//   .where('resource_id', resource_id)
//   .then((result) => {return result[0].avg})
//   .then(async (avg_rating) => {
//     return await
//     knex('resources')
//     .where('id', resource_id)
//     .update({average_rating: avg_rating});
//   })
// };

// (async function() {
//   console.log(await test(4));
// }());
