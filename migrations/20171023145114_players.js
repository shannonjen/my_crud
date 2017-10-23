
exports.up = function(knex, Promise) {
  return knex.schema.createTable('players', (table)=>{
    table.increments();
    table.string('first_name').notNullable().defaultTo('');
    table.string('last_name').notNullable().defaultTo('');
    table.decimal('PER', undefined, 1).notNullable().defaultTo(0);
    table.string('team').notNullable().defaultTo('');
  })
};

exports.down = (knex, Promise)=> {
  return knex.schema.dropTable('players');
};
