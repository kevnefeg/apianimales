var {
    createProduct,
    getAllProducts,
    updateProducts,
    deleteProducts,
} = require('../controllers/product.controller');
var express = require('express');
var router = express.Router();
const { upload } = require('../middleware/uploadFileWithNotEmail')
var hasRole = require("../middleware/hasRole");
const { validateCreate } = require('../validator/product.validator')
const { validateResult } = require('../helpers/validateHelper')

router.post('/', upload.single('image'), hasRole("Service"), validateCreate, validateResult, createProduct);
router.get('/', getAllProducts);
router.put('/:id', updateProducts);
router.delete('/:id', deleteProducts);

module.exports = router;