const dotenv=require("dotenv")
dotenv.config();
const express = require("express");
const router = express.Router();
const crypto=require("crypto");
const Razorpay = require("razorpay");

let PaymentMod=require("../Models/paymentModels")
router.post("/orders" ,async(req,res)=>{

let  {amount ,productitems ,fullName,
address,
city,
state,
pinCode,mobile} =req.body; 


await PaymentMod.create({
    amount:amount,
     city:city,
     fullName:fullName,
     address:address,
     mobile:mobile,
     state:state,
     pincode:pinCode,
     productitems:productitems,
     dop: Date.now(),
     status:false
}) 
try {
        const instance = new Razorpay({
            key_id: process.env.KEY_ID,
            key_secret: process.env.KEY_SECRET,
        });

        const options = {
            amount: req.body.amount * 100,
            currency:"INR",
            receipt:crypto.randomBytes(10).toString("hex"),
        }
        instance.orders.create(options,(error,order) => {
            if(error) {
                console.log(error);
                return res.status(500).json({message:"Something Went Wrong!"});
            }
            res.status(200).json({data:order});
        });

    } catch(error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error!"});
    }

});

//Verifying the payment
router.post("/verify",async(req,res) => {
    try {
        const {
            razorpay_orderID,
            razorpay_paymentID,
            razorpay_signature } = req.body;
        const sign = razorpay_orderID + "|" + razorpay_paymentID;
        const resultSign = crypto
        .createHmac("sha256",process.env.KEY_SECRET)
        .update(sign.toString())
        .digest("hex");

        if (razorpay_signature == resultSign){
            return res.status(200).json({message:"Payment verified successfully"});
        }

    } catch(error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error!"});
    }
});











module.exports=router ;
