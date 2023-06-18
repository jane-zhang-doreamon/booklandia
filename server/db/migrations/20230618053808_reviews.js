
exports.up = function(knex) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments('id')
    table.string('review')
    table.integer('book_id').references('books.id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('reviews')
};
