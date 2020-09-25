// /**
//  * Create 'image' table
//  *
//  * @param knex
//  * @returns {Promise}
//  */
// export function up(knex) {
//     return knex.schema.createTable("image", (table) => {
//       table.increments("id");
//       // table.integer("product_id").notNull().references("id").inTable("product");
//       table.string("post_photo", 300);
//       table.string('post_title', 50);
//       table.string('post_info', 500).notNull();
//       table.integer('post_price',15).notNull();
//       table.string('post_company',15).notNull();
//       table.boolean("is_active").notNull().defaultTo(true)
//     });
//   }
  
//   /**
//    * Drop table 'image'
//    *
//    * @param knex
//    * @returns {Promise}
//    */
//   export function down(knex) {
//     return knex.schema.dropTable("image");
//   }