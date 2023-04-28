import { DeleteRestaurant, UpdateRestaurant, createRestaurant, getRestaurant, getRestaurants } from './restaurant.controller';
import {Router} from 'express';
const router = Router();

// Endpoint GET /prueba
router.get('/',  getRestaurants);
router.get('/:id',  getRestaurant);

// Endpoint POST /prueba
router.post('/',  createRestaurant);

// Endpoint PATCH /prueba
router.patch('/:id',  UpdateRestaurant);

// Endpoint DELETE /prueba
router.delete('/:id',  DeleteRestaurant);

export default router;