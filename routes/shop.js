const path = require('path');
const express=require('express');
const routes=express.Router();

const rootDir=require('../util/path');
routes.get('/',(req,res,next)=>{
    //res.send('<h1>You are using Express!</h1>');
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports=routes;