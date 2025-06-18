import { Router } from 'express';
import { createOrder, getOrders, getAllOrders } from '../controllers/orderController';
import { protect } from '../middlewares/authMiddleware';

const router = Router();

router.route('/').post(protect, createOrder).get(protect, getOrders);
router.get('/all', protect, getAllOrders);

export default router;
