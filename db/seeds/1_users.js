
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({
          id: 1,
          username: 'Alice',
          password: 'asdf',
          email: 'alice@email.com',
          bio: 'Hello, my name is Alice!'
        }),
        knex('users').insert({
          id: 2,
          username: 'Bob',
          password: 'asdf',
          email: 'bob@email.com',
          bio: 'Hello, my name is Bob!'
        }),
        knex('users').insert({
          id: 3,
          username: 'Charlie',
          password: 'asdf',
          email: 'charlie@email.com',
          bio: 'Hello, my name is Charlie!'
        })
      ]);
    });
};
