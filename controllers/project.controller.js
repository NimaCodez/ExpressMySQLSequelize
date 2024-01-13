const { Project } = require("../models/Project.model");

createProject = async (req, res, next) => {
    try {
        const project = Project.build({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            location: req.body.location,
            gender: req.body.gender,
        });

        if (await project.save()) {
            res.status(201).json({
                status: 201,
                success: true,
                message: "Project created successfully",
                data: project,
            });
        }

    } catch (error) {
        next(error);
    }
};

module.exports = {
    createProject,
}
