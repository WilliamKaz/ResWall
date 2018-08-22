
exports.seed = function(knex, Promise) {
  return knex('topics').del()
    .then(function () {
      return Promise.all([
        knex('topics').insert({id: 1, name: 'Music'}),
        knex('topics').insert({id: 2, name: 'Writing'}),
        knex('topics').insert({id: 3, name: 'Engineering'}),
        knex('topics').insert({id: 4, name: 'Health/Wellness'})
      ]);
    });
};
