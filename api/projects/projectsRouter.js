const express = require('express');

const projects = require('./projectsHelpers');

const router = express.Router();

router.get('/', (req, res) => {
    projects.getProjects()
    .then(projectList => {
        res.json(projectList);
    })
    .catch(err => {
        res.status(500).json({ message: `Failed to retrieve the list of projects.`})
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    
    projects.getProjectById(id)
    .then(project => {
        if (project) {
            res.json(project);
        } else {
            res.status(404).json({ message: 'Could not find project with given id.' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: `Failed to retrieve the project.`})
    })
})

router.post('/', (req, res) => {
    const projectData = req.body;
  
    projects.addProject(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new project' });
    });
  });

module.exports = router;