const path=require('path');
const express=require('express');
const router = express.Router();

const rootDir=require('../util/path')

const productController=require('../controllers/products');

router.get('/add-product',productController.getAddProduct);

router.post('/product',productController.postAddProduct);

module.exports=router;