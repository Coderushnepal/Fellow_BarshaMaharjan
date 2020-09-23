/**
 * Create 'home' table/'
 * @param knex 
 * @returns {Promise}
 */


export function up(knex) {
    return knex.schema.createTable('product',table => {
        table.increments('id');
        table.integer('product_id').notNull();
        table.string('title', 50).notNull();
        table.string('info', 500).notNull();
        table.string('price',15).notNull();
        table.string('company',15).notNull();
        table.string('image')
        });
}

// /**
//  * Drop table 'home'
//  * @param knex 
//  * @ returns {Promise}
//  */


export function down(knex) {
  return knex.schema.dropTable('product')
}