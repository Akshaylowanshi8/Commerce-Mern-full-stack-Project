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
// .........................//////////////////....................................................

const googleModel=require("./Models/LogingoogleModels")


const session = require("express-session")
const passport =require("passport")
const OAuth2Strategy=require("passport-google-oauth2").Strategy;
const clintid ="324407606697-74amjljvq5esk7qcdum960aev9fsn3h0.apps.googleusercontent.com"
const Clientsecret= "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"



// setup session
app.use(session({
  secret: 'k234rge456df78g68t7iyceat',
  resave: false,
  saveUninitialized: true,
}))

// setup passport 
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new OAuth2Strategy({
    clientID:clintid,
    clientSecret:Clientsecret,
    callbackURL:"/auth/google/callback",
    scope:["profile","email"]
  },
  async(accessToken,refreshToken,profile,done)=>{
    console.log("profile",profile);
try {
  let user=await googleModel.findOne({googaleid:profile.id})
if(!user)
{
  user=new googleModel({
    googaleid:profile.id,
    displayName:profile.displayName,
    email:profile.emails[0].value,
    image:profile.photos[0].value,
  });
  await user.save()}
} 
catch (error) {
return done(error,null)
}}))
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
// passport.initialize googal ayth

app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}))
app.get("/auth/google/callback",passport.authenticate("google",{
  successRedirect:"http://localhost:5173/home",
  failureRedirect:"http://localhost:5173/UserLogin"
}))

// ................................------------------...........................

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
