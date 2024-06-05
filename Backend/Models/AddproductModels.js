const mongoose = require("mongoose");

const AddProductSchema=new mongoose.Schema(

    {
        Name:{
            type: String,
            required: true,
          },
        Brand:{
            type: String,
            required: true,
          },
        Price:{
            type: Number,
            required: true,
          },
        Imgurl:{
            type: String,
            required: true,
          },
        Detail:{
            type: String,
            required: true,
          },
        Category:{
            type: String,
            required: true,
          },
        Tag:{
            type: String,
            required: true,
          },
         
    }
);

module.exports=mongoose.model("AddProduct",AddProductSchema)