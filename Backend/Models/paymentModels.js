const mongoose= require("mongoose");

const PaymentSchema=new mongoose.Schema({
     amount:Number,
     city:String,
     fullName:String,
     address:String,
     mobile:String,
     state:String,
     pincode:String,
     productitems:String,
     dop:Date,
     status:Boolean
});
module.exports= new  mongoose.model("payment", PaymentSchema);