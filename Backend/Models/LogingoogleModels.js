const mongoose = require("mongoose");

const LogingoogleSchema=new mongoose.Schema(

    {
    
        googaleid:String,
        displayName:String,
        email:String,
        image:String,
         
    },{timestamps:true}
);

module.exports=mongoose.model("googlelogin",LogingoogleSchema)