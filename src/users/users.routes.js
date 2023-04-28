import { createUser, deleteUser, getUserbyID, getUserbyName_pass, patchUser } from "./users.controller";
import {Router} from 'express';
const router = Router();

// Endpoint GET /prueba
router.get('/:number', getUserbyID );
router.get('/:email/:pass', getUserbyName_pass );

// Endpoint POST /prueba
router.post('/', createUser );

// Endpoint PATCH /prueba
router.patch('/:id', patchUser );

// Endpoint DELETE /prueba
router.delete('/:id', deleteUser );

export default router;