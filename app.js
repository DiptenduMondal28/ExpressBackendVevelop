const path=require('path')
const express=require('express');
const bodyParser=require('body-parser');



const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop')
const contact=require('./routes/contact')
const success=require('./routes/success')


app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(contact);
app.use(success)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

app.listen(3000);