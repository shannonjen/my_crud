
exports.up = function(knex, Promise) {
  return knex.schema.createTable('teams', (table)=>{
    table.increments();
    table.string('team_name').notNullable().defaultTo('');
    table.string('w').notNullable().defaultTo('');
    table.string('l').notNullable().defaultTo('');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('teams')
};
