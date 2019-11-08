const express = require('express');

const tasks = require('./tasksHelpers.js');

const router = express.Router();

router.get('/', (req, res) => {
    tasks.getTasks()
    .then(taskList => {
        res.json(taskList);
    })
    .catch(err => {
        res.status(500).json({ message: `Failed to retrieve the list of tasks.`})
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    
    tasks.getTaskById(id)
    .then(task => {
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ message: 'Could not find task with given id.' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: `Failed to retrieve the task.`})
    })
})

router.post('/', (req, res) => {
    const taskData = req.body;
  
    tasks.addTask(taskData)
    .then(task => {
      res.status(201).json(task);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new task' });
    });
  });

module.exports = router;