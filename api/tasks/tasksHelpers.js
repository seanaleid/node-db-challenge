const db = require('../../dbConfig.js');

module.exports = {
    getTasks,
    getTaskById,
    addTask,
}

function getTasks() {
    return db('tasks')
        .select('t.*', 'p.p_name', 'p.p_description')
        .from('tasks as t')
        .join('projects as p', 'p.id', 't.project_id')
}

function getTaskById(id) {
    return db('tasks')
        .where({id})
        .first();
}

function addTask(task) {
    return db('tasks')
        .insert(task)
        .then(id => {
            return getTaskById(id[0]);
        });
}