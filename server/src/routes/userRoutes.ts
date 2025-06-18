import { Router } from 'express';
import { getProfile, getUsers } from '../controllers/userController';
import { protect } from '../middlewares/authMiddleware';

const router = Router();

router.get('/me', protect, getProfile);
router.get('/', protect, getUsers);

export default router;
