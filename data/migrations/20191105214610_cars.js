/**
 * 
 * - The critical information for each car is the VIN, make, model, and mileage.
- They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.

 */

exports.up = function(knex) {
    return knex.schema.createTable("cars", table => {
        // table.increments();
        table.text("VIN", 50).unique().notNullable().primary();
        table.text("make", 50).notNullable();
        table.text("model", 50).notNullable();
        table.integer("milage").notNullable();
        table.text("transmission", 50);
        table.text("title_status", 50);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
