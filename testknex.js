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

const test = async function (stars, user_id, resource_id) {
  return await
  knex('ratings')
  .where('user_id', user_id)
  .andWhere('resource_id', resource_id)
  .update({stars});
};

(async function() {
  console.log(await test(4, 1, 1));
}());
