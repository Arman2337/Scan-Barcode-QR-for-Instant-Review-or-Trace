import express from 'express';
import { getAllProducts,
         getProductByCode, 
         createProduct,
         updateProduct,   // <-- Add this
        deleteProduct,  } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:code', getProductByCode);     // GET /api/products/:code
router.post('/', createProduct);            // POST /api/products
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
