const { createProject } = require('../../controllers/project.controller');

const router = require('express').Router();

router.post('/new', createProject);

module.exports = {
    projectsRouter: router
}
