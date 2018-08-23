
exports.up = function(knex, Promise) {
  return knex.schema.table('likes', function (table) {
    table.timestamp('created_at', true).defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('likes', function (table) {
    table.dropColumn('created_at');
  });
};
