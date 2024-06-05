const mongoose = require("mongoose");

const LogingoogleSchema=new mongoose.Schema(

    {
    
        googaleid:{
            type: String,
            required: true,
          },
        displayName:{
            type: String,
            required: true,
          },
        email:{
            type: String,
            required: true,
          },
        image:{
            type: String,
            required: true,
          },
         
    },{timestamps:true}
);

module.exports=mongoose.model("googlelogin",LogingoogleSchema)