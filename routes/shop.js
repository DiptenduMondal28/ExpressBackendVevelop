const path = require('path');
const express=require('express');
const routes=express.Router();

const rootDir=require('../util/path');
const product=require('../controllers/products')

routes.get('/',product.getProducts);

module.exports=routes;