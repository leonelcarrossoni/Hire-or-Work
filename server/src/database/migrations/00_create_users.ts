import Knex from 'knex';

//Irá criar uma tabela chamada users
export async function up (knex: Knex) {
    return knex.schema.createTable('users', table => { 
        table.increments('id').primary();
        table.string('user').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}