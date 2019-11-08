const express = require('express');

// import projects router here
// import resources router here
// import tasks router here

const server = express();

server.use(express.json());
// server.use('/api/projects', projectsRouter);
// server.use('/api/resources', resourcesRouter);
// server.use('/api/tasks', tasksRouter);

module.exports = server;