exports.up = function(knex) {
    return knex.schema.createTable("issues", tbl => {
      tbl.increments();
      tbl
        .string('title', 255)
        .notNullable()
        .unique()
        .index();
      tbl.text('description')
        .notNullable();
      tbl.integer('userId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
    })
    .createTable('users', tbl => {
        tbl.increments();
        tbl.string('name')
          .unsigned()
          .notNullable();
        tbl.text('bio')
          .notNullable();
      });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("issues");
  };
  