import express from 'express';
import{
  getProjects,
  createProject
} from "../controllers/ProjectController.js";

const router = express.Router();

router.get('/projects',getProjects);
router.post('/projects', createProject);

export default router;