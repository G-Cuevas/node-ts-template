import { Router } from "express";
import { getUser, getUsers, postUser, patchUser, deleteUser } from '../controllers/users-controllers';

export const router = Router();



router.get( '/', getUser );
router.get( '/:id', getUsers );
router.post( '/', postUser );
router.patch( '/:id', patchUser );
router.delete( '/:id', deleteUser );



export default router;