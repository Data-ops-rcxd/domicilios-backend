import { Router } from "express";
import { DeleteOrder, UpdateOrder, createOrder, getOrder, getOrders } from "./orders.controller";

const router = Router();

router.get('/:id', getOrder);
router.get('/', getOrders);
router.create('/', createOrder);
router.patch('/:id',UpdateOrder);
router.delete('/:id',DeleteOrder);


export default router;