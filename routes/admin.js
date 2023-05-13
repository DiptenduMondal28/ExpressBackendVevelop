const path=require('path');
const express=require('express');
const router = express.Router();

const rootDir=require('../util/path')

router.get('/add-product',(req,res,next)=>{
    //console.log(req);
    //res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><input type="number" name ="size"><button type="submit">Add Product</button></form>');
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

router.post('/product',(req,res,next)=>{
    console.log("req body")
    console.log(req.body);
    res.redirect('/');
});

module.exports=router;