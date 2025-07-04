const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    proname:{
        type:String,
        required:true
    },
    prodesc:{
        type:String,
        required:true
    },
    proprice:{
        type:Number,
        default:false
    }
});
module.exports=mongoose.model("product",productSchema);