const express = require('express');

const projectsRouter = require('./api/projects/projectsRouter.js');
const resourcesRouter = require('./api/resources/resourcesRouter.js');
const tasksRouter = require('./api/tasks/tasksRouter.js');

const server = express();

server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);

module.exports = server;