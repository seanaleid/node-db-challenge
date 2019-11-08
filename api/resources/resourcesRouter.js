const express = require('express');

const resources = require('./resourcesHelpers.js');

const router = express.Router();

router.get('/', (req, res) => {
    resources.getResources()
    .then(resourceList => {
        res.json(resourceList);
    })
    .catch(err => {
        res.status(500).json({ message: `Failed to retrieve the list of resources.`})
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    
    resources.getResourceById(id)
    .then(resource => {
        if (resource) {
            res.json(resource);
        } else {
            res.status(404).json({ message: 'Could not find resource with given id.' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: `Failed to retrieve the resource.`})
    })
})

router.post('/', (req, res) => {
    const resourceData = req.body;
  
    resources.addResource(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
  });

module.exports = router;