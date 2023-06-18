
exports.up = function(knex) {
  return knex.schema.createTable('books', (table) => {
    table.increments('id')
    table.string('name')
    table.string('picture')
  })
};


exports.down = function(knex) {
  return knex.schema.dropTable('books')
};
