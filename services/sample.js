const {cn} = require('../db/connection');
const db = new cn();

const getAll = async () => {
    return db('Samples')
        .select('*');
}

const getSample = async id => {
    return db('Samples')
        .select('*')
        .where({ id })
        .first();
}

module.exports = {
    getAll,
    getSample
};
