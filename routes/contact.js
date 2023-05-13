const path=require('path');
const express=require('express');
const routes=express.Router();

const rootDir=require('../util/path');

routes.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'));
});

module.exports=routes;
