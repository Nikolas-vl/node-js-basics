import { Router } from 'express';
import {
  getStudentsController,
  getStudentByIdController,
  createStudentsController,
  deleteStudentController,
} from '../controllers/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/students', ctrlWrapper(getStudentsController));

router.get('/students/:studentId', ctrlWrapper(getStudentByIdController));

router.post('/students', ctrlWrapper(createStudentsController));

router.delete('/students/:studentId', ctrlWrapper(deleteStudentController));

export default router;
