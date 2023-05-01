/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable('bookings', (table) => {
        table.increments('id').primary();
        table.date('start_date').notNullable();
        table.date('end_date').notNullable();
        table.integer('listing_id').notNullable();
        table.foreign('listing_id').references('id').inTable('listings');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTable('bookings');
};