const express = require("express");
const router = express.Router();
const admincontroller=require("../Controllers/AdminControllers")
const nodemailer = require("nodemailer");
// send mail
router.post("/contect",  (req, res) => {
    const {email ,name,message }  = req.body;
    // console.log(email,name,message);
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });
        const mailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: "Sending Email With Electric shop contect us",
            html:`
            
            <h1> castumer Name :${name} Castumer email : <email>${email} </email>  <br/>castumer message:${message} </h1>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).json("Email sent thank you ")
            }
        })
    } catch (error) {
        console.log("Error" + error);
        res.status(401).json({status:401,error})
    }
})
router.post("/checkadmin",admincontroller.checkadmin)
router.post("/AddproductData",admincontroller.AddproductData)
router.post("/DelproductData",admincontroller.DelproductData)
router.post("/UpdatedataLoad",admincontroller.UpdatedataLoad)
router.post("/AddUpdateproductData",admincontroller.AddUpdateproductData)
router.get("/DisplayOrder",admincontroller.DisplayOrder )
router.get("/userdata",admincontroller.userData)
module.exports=router ;
