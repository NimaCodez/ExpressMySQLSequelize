const { authRouter } = require('./auth/auth.router');
const { projectsRouter } = require('./projects/project.router');

const mainRouter = require('express').Router();

mainRouter.get('/', (req, res) => {
    return res
        .status(200)
        .json({ status: 200, success: true, message: 'Hello World!' });
});

mainRouter.use('/auth', authRouter);
mainRouter.use('/projects', projectsRouter);

module.exports = {
    mainRouter,
};
