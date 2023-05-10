const express=require('express');

const app=express();

app.use((req,res,next)=>{
    console.log("first middlewire");
    next();
})

app.use((re,res,next)=>{
    console.log('second middlewire');
    res.send('<h1>Use the express first time!</h1>')
})

app.listen(3000);
