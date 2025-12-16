import express from 'express';
import * as controller from '../controllers/supplyController.js';

const router = express.Router();

router.get('/', controller.getAllSupplies);
router.post('/', controller.createSupply);
router.put('/:id', controller.updateSupply);
router.delete('/', controller.deleteSupply);

export default router;
