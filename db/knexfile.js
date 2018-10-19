const {config} = require('./connection');

module.exports = {
    client: config.client,
    connection: config.connection,
    pool: config.pool,
    migration: {
        ...config.migrations,
        directory: './migrations'
    },
    debug: false,
};
