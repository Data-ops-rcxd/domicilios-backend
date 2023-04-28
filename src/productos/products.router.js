
import { DeleteProduct, UpdateProduct, createProduct, getProduct, getquantity } from './products.controller';
import {Router} from 'express';
const router = Router();

// Endpoint GET /prueba
// router.get('/:id', getProduct );
router.get('/products', getquantity );

// Endpoint POST /prueba
router.post('/', createProduct );

// Endpoint PATCH /prueba
router.patch('/:id', UpdateProduct );

// Endpoint DELETE /prueba
router.delete('/:id', DeleteProduct );

export default router;