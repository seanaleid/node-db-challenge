const db = require('../../dbConfig.js');

module.exports = {
    getProjects,
    getProjectById,
    addProject,
}

function getProjects() {
    return db('projects')
}

function getProjectById(id) {
    return db('projects')
        .where({id})
        .first();
}

function addProject(project) {
    return db('projects')
        .insert(project)
        .then(id => {
            return getProjectById(id[0]);
        });
}