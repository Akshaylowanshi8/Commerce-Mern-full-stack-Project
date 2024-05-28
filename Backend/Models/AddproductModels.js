const mongoose = require("mongoose");

const AddProductSchema=new mongoose.Schema(

    {
        Name:String,
        Brand:String,
        Price:String,
        Imgurl:String,
        Detail:String,
        Category:String,
        Tag:String,
         
    }
);

module.exports=mongoose.model("AddProduct",AddProductSchema)