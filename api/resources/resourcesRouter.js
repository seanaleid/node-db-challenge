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


module.exports = router;