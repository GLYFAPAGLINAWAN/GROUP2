const express = require('express');
const router = express.Router();
const controller = require('../controllers/supplyController');

router.get('/', controller.getAllSupplies);
router.post('/', controller.createSupply);
router.put('/:id', controller.updateSupply);
router.delete('/', controller.deleteSupply);

module.exports = router;
