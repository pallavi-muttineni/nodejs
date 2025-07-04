const express=require('express');
const mongoose=require('mongoose');
const product=require('./model/product');
const app=express();
app.use(express.json());
//mongodb://localhost:27017/TodoDB
mongoose.connect("mongodb://localhost:27017/productDB",
    {useNewUrlParser:true,useunifiedTopology:true}
).then(()=>{console.log("connection established")}
).catch(err=>console.log("Error occured",err));
app.get("/dbfetchproduct",async(req,res)=>{
   const tasks=await product.find();
    res.json(tasks);
});
app.post("/dbaddproduct",(req,res)=>{
 const newpro=new product({proname:req.body.proname});
 newpro.save();
 res.send(newpro);
});
app.listen(5000,function(){
    console.log("port listening on 5000");
});