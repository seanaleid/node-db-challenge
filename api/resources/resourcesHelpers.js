const db = require('../../dbConfig.js');

module.exports = {
    getResources,
}

function getResources() {
    return db('resources')
}