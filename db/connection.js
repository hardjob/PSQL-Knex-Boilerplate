const knex = require('knex');

const config = {
    client: 'postgresql',
    connection: {
        host: 'minideskdb.cqgngsobknfc.us-east-1.rds.amazonaws.com',
        database: 'minideskdb',
        user: 'minidesk',
        password: 'r2d2c3po',
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    },
};

module.exports = {
    cn: () => {
        return knex(config);
    },
    config
};
