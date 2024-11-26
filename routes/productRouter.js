import { Router } from 'express'
const router = Router()
import {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getApplicationStats,
} from '../controllers/productController.js'
import {
  validateProductInput,
  validateIdParam,
} from '../middleware/validationMiddleware.js'
import { authorizePermissions } from '../middleware/authMiddleware.js'
import upload from '../middleware/multerMiddleware.js'

router
  .route('/')
  .get(getAllProducts)
  .post(upload.single('image'), validateProductInput, createProduct)

router.get('/stats', /*authorizePermissions('admin'),*/ getApplicationStats)

router
  .route('/:id')
  .get(getProduct)
  .patch(/*authorizePermissions('admin'),*/ validateProductInput, updateProduct)
  .delete(/*authorizePermissions('admin'),*/ validateIdParam, deleteProduct)

export default router
