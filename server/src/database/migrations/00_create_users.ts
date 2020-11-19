import Knex from 'knex';

export async function up (knex: Knex) {
    return knex.schema.createTable('users', table => { //Irá criar uma tabela chamada users
        table.increments('id').primary();
        table.string('user').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}