const Product=require('../models/product')
const path = require('path');
const rootDir=require('../util/path');
const fs = require('fs');


exports.getAddProduct=(req, res, next) => {
  res.sendFile(path.join(rootDir,'views','add-product.html'));
};

exports.postAddProduct=(req,res,next)=>{
  const product=new Product(req.body.title);
  // const myJSON = JSON.stringify(product.title);
  // fs.appendFile('message.txt',myJSON,err=>{
  //   if(err){
  //     console.log(err);
  //   }
  // });
  console.log(product);
  product.save();
  res.redirect('/');
}
 exports.getProducts = (req, res, next) => {
  // const products=Product.fetchAll();
  res.sendFile(path.join(rootDir,'views','shop.html'))
 }

 exports.contact=(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','contact.html'));
}