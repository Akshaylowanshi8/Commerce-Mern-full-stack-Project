
const userModel=require("../Models/UserSignupModule")
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt')
var secret_key="akshay";


const usersignup=async(req,res)=>{

let nam=req.body.name;
let email=req.body.email;
let mob=req.body.MobileNo;
 let pass=req.body.password;
try {
    await userModel.create(
        {username:nam,
            email:email,
            mobileNo:mob,
            password:pass})
    .then(()=>{res.send("User created successfully!")})
} 
catch(error) {
    console.error('Error registering user:', error);
    res.send("Failed to create user. Please try again later.")
}
}
//------------- user login-----------------

const userLogin=async(req,res)=>{

let name=req.body.username;
let password=req.body.password;

console.log( name,password);
const user= await userModel.findOne({email:name})
// console.log(user);
if(!user){
return res.json('invalid email !')
}
const isvalidpass = await bcrypt.compare(password,user.password)
// console.log(isvalidpass);
if(!isvalidpass)
{
   return res.send("invalid password")
}
const token = jwt.sign({userid:user._id,username:user.name,email:user.email},secret_key)
// console.log(token);
res.status(200).json({token,username:user.username,message: 'succesfully Login' })
}
module.exports={
   usersignup,
    userLogin

}