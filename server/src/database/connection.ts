import knex from 'knex';
import path from 'path';

const db = knex({
    client:'sqlite3', //Banco de dados que será utilizado
    connection: {
        //__dirname retorna o caminho do diretório do arquivo. E dentro do database criar o arquivo sqlite
        // path.resolve auxilia na definição do diretório
        filename: path.resolve(__dirname, '/database.sqlite') //onde vai ficar armazenado o sqlite
    },
    useNullAsDefault: true, //O sqlite não sabe o que utilizar por padrão nos campos não preenchido. Aqui definimos como Nulo.
});

export default db;