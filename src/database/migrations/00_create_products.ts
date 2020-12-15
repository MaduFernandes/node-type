import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('products', table => {
        table.increments('id_products').primary();
        table.string('name').notNullable();
        table.double('price').notNullable();
        table.string('description').notNullable();
        table.string('category').notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('products');
}