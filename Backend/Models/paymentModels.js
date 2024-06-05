const mongoose= require("mongoose");

const PaymentSchema=new mongoose.Schema({
     amount:{
          type:Number,
          required: true,
        },
     city: {
          type: String,
          required: true,
        },
     fullName: {
          type: String,
          required: true,

        },
     address: {
          type: String,
          required: true,
        },
     mobile:{
          type: Number,
          required: true,
        },
     state:{
          type: String,
          required: true,
        },
     pincode:{
          type: Number,
          required: true,
        },
     productitems:{
          type: String,
     
        },
     dop:{
          type: Date,
        },
     status:{
          type: Boolean,
        },
});
module.exports= new  mongoose.model("payment", PaymentSchema);