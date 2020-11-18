import path from 'path';

module.exports = { //com a sintaxe antiga pq o knex não entende a nova (export default)
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite') //caminho do arquivo
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true,
};