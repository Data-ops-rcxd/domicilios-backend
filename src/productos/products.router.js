
import { DeleteProduct, UpdateProduct, createProduct, getProduct, getproducts } from './products.controller';
import {Router} from 'express';
const router = Router();

// Endpoint GET /prueba
router.get('/', getproducts );
router.get('/:id', getProduct );

// Endpoint POST /prueba
router.post('/', createProduct );

// Endpoint PATCH /prueba
router.patch('/:id', UpdateProduct );

// Endpoint DELETE /prueba
router.delete('/:id', DeleteProduct );

export default router;