
exports.up = function(knex) {
    return knex.schema.createTable('resources', tbl => {
        tbl.increments();

        tbl.string('r_name', 255).notNullable()
        tbl.string('r_description', 255);
    })
    .createTable('projects', tbl => {
        tbl.increments();

        tbl.string('p_name', 255).notNullable()
        tbl.string('p_description', 255)
        tbl.boolean('isCompleted').notNullable().defaultTo(false);
    })
    .createTable('project_resources', tbl => {
        tbl.increments();

        tbl
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT') 
            .onUpdate('CASCADE') 
        tbl
            .integer('resource_id')
            .unsigned()
            .references('id')
            .inTable('resources')
            .onDelete('RESTRICT') 
            .onUpdate('CASCADE');
    })
    .createTable('tasks', tbl => {
        tbl.increments();

        tbl.string('t_description', 255).notNullable()
        tbl.string('t_notes', 255)
        tbl.boolean('isCompleted').notNullable().defaultTo(false);

        tbl
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT') 
            .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema  
        .dropTableIfExists('tasks')
        .dropTableIfExists('project_resources')
        .dropTableIfExists('projects')
        .dropTableIfExists('resources');
};
