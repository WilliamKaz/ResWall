
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('likes', function (table) {
      table.dropColumn('id');
      table.unique(['user_id', 'resource_id']);
    }),
    knex.schema.table('ratings', function (table) {
      table.dropColumn('id');
      table.unique(['user_id', 'resource_id']);
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('likes', function (table) {
      table.increments('id');
      table.dropUnique(['user_id', 'resource_id']);
    }),
    knex.schema.table('ratings', function (table) {
      table.increments('id');
      table.dropUnique(['user_id', 'resource_id']);
    })
  ])
};
