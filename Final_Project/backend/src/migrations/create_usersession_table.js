/**
 * Create 'admin_sessions' table
 *
 * @param knex
 * @returns {Promise}
 */
export function up(knex) {
    return knex.schema.createTable("user_sessions", (table) => {
      table.increments("id");
      table
        .integer("user_id")
        .notNull()
        .references("id")
        .inTable("user_login");
      table.string("token", 500).notNull();
      table.boolean("is_active").notNull().defaultTo(true);
      table.timestamp("created_at").defaultTo(knex.raw("now()"));
    });
  }
  
  /**
   * Drop table 'admin_sessions'
   *
   * @param knex
   * @returns {Promise}
   */
  export function down(knex) {
    return knex.schema.dropTable("user_sessions");
  }

  
    //     "id":"1",
    //     "product_id":"3",
    //       "title": "Cucumber",
    //       "image": "https://i.postimg.cc/Dy0TMBjG/product-3.jpg",
    //       "price": "180",
    //       "company": "Big Mart",
    //       "info":
    //       "Sisaa-Pusaa aims to include in the product list up to date pictures of the products and accurate ingredients, nutritional information and other information. However, product detail may change from time to time and there may be a delay in making updates. When precise information is important, we recommend that you read the label on the products you purchase or contact the manufacturer of the product."
    // 