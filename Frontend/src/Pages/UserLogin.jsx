import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const UserLogin=()=>{
    const [formData,setFormData]=useState("")
let mynav =useNavigate()
    const handleChange=(e)=>{
     let names=e.target.name;
     let value =e.target.value;
     setFormData(values=>({...values,[names]:value}));
     console.log(formData);
  
      }    
  const handleSubmit =async() => {
      let url ="http://localhost:8000/user/userLogin"
      await axios.post(url,formData)
        .then(res =>{
        setFormData({
            username:"",
            password:""
            })
           alert(res.data)
            if(res.data.message === "succesfully Login"){
            window.localStorage.setItem("token",res.data.token)
            window.localStorage.setItem("username",res.data.username)
            alert(res.data.message);
            mynav("/home")
            }  
          } 
        )
   }
   const Logingoogle=async()=>{
    window.open("http://localhost:8000/auth/google/callback","-self")
    }
    return(<>

    <div className="flex   h-fit justify-center align-middle mt-14">

{/* <div className=""><img src="\src\assets\userLogin.jpg" /></div> */}

<div className="gap-2  mb-20  h-[400px] p-7 w-[500px] bg-transparent flex justify-center text-pretty flex-col  shadow-md shadow-slate-950  font-sans ">

     <h1 className="font-bold ">Welcome User 👋🏻</h1>
     <p className="font-semibold" >Please sign-in to your account and start the adventure</p>
     <label>Email or username </label>
     <input  className="border-blue-400  border-b bottom-1 rounded-l-md border"  name='username'  value={formData.username} onChange={handleChange} />
     <label>Password</label>
     <input type="password"  className="border-red-400  border-b bottom-1 rounded-l-md border"  name='password' value={formData.password} onChange={handleChange}/>
      <div className=""> <p className="cursor-pointer hover:text-green-700"><Link to="/usersignup" >Ragisterd New user ?  </Link>  </p> <p className="cursor-pointer hover:text-red-700">Forgot password?</p> 
     </div>
     <button  onClick={handleSubmit} className="bg-gray-800  text-white font-semibold p-2 border-black border rounded-md hover:text-green-400 ">Login</button>
     <div className="">or </div>

   <button onClick={Logingoogle} className="p-2 bg-gray-800  text-white font-semibold border-black border rounded-md hover:text-green-400   ">Login with Google</button>
      </div>
      </div>
    </>)
}

export default UserLogin;