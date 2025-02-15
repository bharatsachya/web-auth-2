import express from 'express';
import { authenticate } from '../middleware/authMiddleware';
import { getProjects } from '../controllers/projectController';

const router = express.Router();

router.get('/', authenticate, getProjects);

export default router;