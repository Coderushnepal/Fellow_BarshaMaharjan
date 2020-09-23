/**
 * Create 'user_login' table
 *
 * @param knex
 * @returns {Promise}
 */
export function up(knex) {
    return knex.schema.createTable("user_login", table => {
      table.increments('id');
      table.string("email", 100).notNull().unique();
      table.string("password", 200).notNull();
    });
  }
  
  /**
   * Drop table 'user_login'
   *
   * @param knex
   * @returns {Promise}
   */
  export function down(knex) {
    return knex.schema.dropTable("user_login");
  }