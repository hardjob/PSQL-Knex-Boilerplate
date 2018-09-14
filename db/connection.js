const knex = require('knex');

const config = {
    client: 'postgresql', 
    connection: { database: '' },
    pool: { min: 2, max: 10 },
    migrations: { tableName: knex_migrations },
}

module.exports = () => {
    return knex(config);
}