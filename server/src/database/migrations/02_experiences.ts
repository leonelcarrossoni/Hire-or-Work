import Knex from 'knex';

export async function up (knex: Knex) {
    return knex.schema.createTable('experiences', table => { //Irá criar uma tabela chamada users
        table.increments('id').primary();
        table.string('function').notNullable();
        table.string('experience-level').notNullable();
        table.string('bio').notNullable();

        table.integer('experience_id')
            .notNullable()
            .references('id')
            .inTable('users')     // se relaciona com o id da tabela users
            .onUpdate('CASCADE') // Caso o id seja alterado na tabela usuário, o mesmo ocorre aqui
            .onDelete('CASCADE'); //se um user é deletado da plataforma, as informações dele somem juntas
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('experiences');
}