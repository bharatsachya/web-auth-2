"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjects = void 0;
const projects = [
    { id: 1, name: 'Project 1', userId: 1 },
    { id: 2, name: 'Project 2', userId: 2 },
];
const getProjects = (req, res) => {
    const userId = req.user.userId;
    const userProjects = projects.filter((p) => p.userId === userId);
    res.json(userProjects);
};
exports.getProjects = getProjects;
