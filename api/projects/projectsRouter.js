const express = require('express');

const projects = require('./projectsHelpers.js');

const router = express.Router();

router.get('/', (req, res) => {
    projects.getProjects()
    .then(projectList => {
        let changeValue = projectList.map(project => {
            return { ...project, isCompleted: project.isCompleted === 0 ? false : true }
        })
            res.json(changeValue);
        })
    .catch(err => {
        res.status(500).json({ message: `Failed to retrieve the list of projects.`})
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    
    projects.getProjectById(id)
    .then(project => res.json({
        ...project,
        isCompleted: project.isCompleted === 0 ? false : true
    }))
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