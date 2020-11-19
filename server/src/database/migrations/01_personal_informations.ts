import Knex from 'knex';

export async function up (knex: Knex) {
    return knex.schema.createTable('informations', table => { //Irá criar uma tabela chamada users
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('last-name').notNullable();
        table.string('email').notNullable();
        table.string('tel').notNullable();
        table.string('birthday').notNullable();
        table.string('birthplace').notNullable();
        table.string('zipcode').notNullable();
        table.string('home-number').notNullable();
        table.string('street').notNullable();
        table.string('city').notNullable();
        table.string('state').notNullable();
        table.string('english-level').notNullable();
        table.string('other-language').notNullable();
        table.string('language-level').notNullable();
        table.string('insurance').notNullable();
        table.string('utr').notNullable();
        table.string('cscs').notNullable();
        table.string('cscs-type').notNullable();
        table.string('receive-email').notNullable();
        table.string('receive-whats').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE') // Caso o id seja alterado na tabela usuário, o mesmo ocorre aqui
            .onDelete('CASCADE'); //se um user é deletado da plataforma, as informações dele somem juntas
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('informations');
}