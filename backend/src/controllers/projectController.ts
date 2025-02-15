import { Request, Response } from 'express';

const projects = [
  { id: 1, name: 'Project 1', userId: 1 },
  { id: 2, name: 'Project 2', userId: 2 },
];

export const getProjects = (req: Request, res: Response): void => {
  const userId = (req as any).user.userId;
  const userProjects = projects.filter((p) => p.userId === userId);
  res.json(userProjects); // Send the filtered projects in the response
};