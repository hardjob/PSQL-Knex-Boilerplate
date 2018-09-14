module.exports = {
    client: 'postgresql',
    connection: {
        host: 'amazonIPV4Address',
        database: 'DatabaseName',
        user: 'username',
        password: 'password',
    },
    pool: {
        min: 2,
        max: 10,
    },
    migration: {
        directory: './migrations',
        tableName: 'knex_migrations'
    },
    debug: false,
}