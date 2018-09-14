
exports.up = knex => {
    return knex.schema.hasTable('Samples').then(exists => {
        if(!exists){
            return knex.schema.createTable('Samples', table => {
                table.uuid('sampleId').primary();
                table.string('sampleName');
            })
        }
    })
}

exports.down = knex => {
    return knex.schema.dropTableIfExists('Samples');;
};
