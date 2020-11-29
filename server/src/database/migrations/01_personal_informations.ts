import Knex from 'knex';

export async function up (knex: Knex) {
    return knex.schema.createTable('informations', table => { //Irá criar uma tabela chamada users
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('lastname').notNullable();
        table.string('email').notNullable();
        table.string('tel').notNullable();
        table.string('birthday').notNullable();
        table.string('birthplace').notNullable();
        table.string('zipcode').notNullable();
        table.string('homenumber').notNullable();
        table.string('street').notNullable();
        table.string('city').notNullable();
        table.string('state').notNullable();
        table.string('englishlevel').notNullable();
        table.string('otherlanguage').notNullable();
        table.string('languagelevel').notNullable();
        table.string('insurance').notNullable();
        table.string('utr').notNullable();
        table.string('cscs').notNullable();
        table.string('cscstype').notNullable();
        table.string('bio').notNullable();
        table.string('receiveemail').notNullable();
        table.string('receivewhats').notNullable();

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