exports.up = function (knex) {
  return knex.schema.createTable("champions", (tbl) => {
    tbl.increments("id").unsigned();
    tbl.text("name").unique().notNullable();
    tbl.integer("age").unsigned();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("champions");
};
