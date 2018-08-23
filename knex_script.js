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
const test = async function () {
  return await
  knex.select().from('resources')
  .where('user_id', 1);

};

(async function() {
  console.log(await test());
}());


// async function getProfile2(user_id) {
//   return await knex.select('username', 'bio').from('users')
//   .where('id', user_id)
//   .then((result) => {return (result[0])})
// }

// (async function() {
//   const p = await getProfile2(2);
//   console.log(p);
// }())
// .then(()=>{});
// const createUser = async (username, password, email, bio) => {
//   return await knex('users').insert({
//     username,
//     password,
//     email,
//     bio
//   })
// }

// (async function() {
//   const p = await createUser('bordan', '123', 'bordan@email.com', 'this is a bio');
//   console.log(p);
// }())



module.exports = function makeDataHelpers(knex) {
  return {

    createUser: async (username, password, email, bio) => {
      return await
      knex('users').insert({
        username,
        password,
        email,
        bio
      });
    },

    checkCredentials: async (email, password) => {
      return await
      knex('users').count('email')
      .where('email', email)
      .then((result) => {return (result[0].count === '1')});
    },

    getUserId: async (email) => {
      return await
      knex.select('id').from('users')
      .where('email', email)
      .then((result) => {return (result[0].id)})
    },

    getProfile: async (user_id) => {
      return await
      knex.select('username', 'bio').from('users')
      .where('id', user_id)
      .then((result) => {return (result[0])});
    },

    updateProfile: async (user_id, bio) => {
      return await
      knex('users')
      .where('id', user_id)
      .update({bio});
    },

    getMyResources: async (user_id) => {
      return await
      knex.select().from('resources')
      .where('user_id', user_id);  ///unsorted still
    },

    getTweets: function(callback) {
      const sortNewestFirst = (a, b) => b.created_at - a.created_at;
      db.collection("tweets").find().toArray( (err, array) => {
        callback(err, array.sort(sortNewestFirst));
      });
    }

  };
}
