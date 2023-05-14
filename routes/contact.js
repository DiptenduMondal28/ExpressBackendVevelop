const path=require('path');
const express=require('express');
const routes=express.Router();

const productController=require('../controllers/products');

routes.get('/contact',productController.contact);

module.exports=routes;
