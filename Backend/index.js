const express = require("express");
const app=express();
const cors = require('cors');
app.use(cors({
origin: 'http://localhost:5173'
}));
const mongoose = require("mongoose");
const dotenv=require("dotenv")
dotenv.config();


// cross origin resource searing by use becouse we are use react frontend   =>it is called middil wear 


//  -> its a middil wear 
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

//------------------------ mongoose.connection----------------------
mongoose.connect(process.env.DataBase)
.then(console.log(" datbase connected "));

const Mailrouter = require("./Routes/Nodemailerfromcontect");
app.use("/send",Mailrouter)
const paymentRoute =require("./Routes/paymentRoute");
app.use( "/payment",paymentRoute)

const adminRoutes = require("./Routes/AdminRoutes")
app.use("/Admin",adminRoutes);
const DisplayRoutes = require("./Routes/Displayproduct")
app.use("/Displayproduct",DisplayRoutes);
const UserRouters=require("./Routes/UserRoutes");
app.use("/user",UserRouters)
const port = process.env.PORT || 8000;
app.listen(port, () =>{ 
    console.log((`Example app listening on port ${port}!`))
  })
