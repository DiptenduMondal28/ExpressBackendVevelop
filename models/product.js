const fs=require('fs');
const path=require('path');

const p=path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

const getsProductFomFIle=(cb)=>{
    fs.readFile(p,(err,fileContent)=>{
        if(err){
            return cb([]);
        }
        console.log(JSON.parse(fileContent));
        cb(JSON.parse(fileContent));
    })
}

module.exports = class Product{
    constructor(t){
        this.title=t;
    }
    save(){
        getsProductFomFIle(products=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),err=>{
                console.log(err);
            });
        });

    }

    static fetchAll(cb){
        getsProductFomFIle(cb);
    }
}