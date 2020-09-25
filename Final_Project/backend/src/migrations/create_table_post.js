// /**
//  * Create 'image' table
//  *
//  * @param knex
//  * @returns {Promise}
//  */
// export function up(knex) {
//     return knex.schema.createTable("gallery", (table) => {
//       table.increments("id");
//       // table.integer("product_id").notNull().references("id").inTable("product");
//       table.string("post_photo", 300);
//       table.string('post_title', 50);
//       table.string('post_info', 500);
//       table.integer('post_price',15);
//       table.string('post_company',15);
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
//     return knex.schema.dropTable("gallery");
//   }