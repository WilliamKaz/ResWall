
exports.seed = function(knex, Promise) {
  return knex('ratings').del()
    .then(function () {
      return Promise.all([
        knex('ratings').insert({id: 1, stars: 4, user_id: 1, resource_id: 1}),
        knex('ratings').insert({id: 2, stars: 5, user_id: 2, resource_id: 1}),
        knex('ratings').insert({id: 3, stars: 4, user_id: 2, resource_id: 2}),
        knex('ratings').insert({id: 4, stars: 5, user_id: 3, resource_id: 2}),
        knex('ratings').insert({id: 5, stars: 4, user_id: 1, resource_id: 3}),
        knex('ratings').insert({id: 6, stars: 5, user_id: 3, resource_id: 3}),
        knex('ratings').insert({id: 7, stars: 4, user_id: 2, resource_id: 4}),
        knex('ratings').insert({id: 8, stars: 5, user_id: 3, resource_id: 4})
      ]);
    });
};
