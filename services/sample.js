const db = require('../db/connection');

const getAll = async () => {
    return db()('Samples')
        .select('*');
}

const getSample = async id => {
    return db()('Samples')
        .select('*')
        .where({ id })
        .first();
}

module.exports = {
    getAll,
    getSample
}