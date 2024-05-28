import axios from "axios";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const AdminLogin=()=>{
const [input,setinput] = useState("");
console.log(input);
let  mynav=useNavigate()
const handinput=(e)=>{
const names =e.target.name;
const value =e.target.value;
 console.log(names,value);
  setinput(values=>({...values,[names]:value}));
  console.log(input);
}
const getLogin=()=>{
 let url ="http://localhost:8000/Admin/checkadmin"
axios.post(url,input)
.then(result => {
  if(result.data === "Success"){
    window.localStorage.setItem("username", input.username)
mynav("../Dashboard")
      }
    else{ 
      alert(result.data)
}})
}
return( <>
<div className=" flex overflow-y-hidden p-20   object-cover shadow-lg shadow-slate-800">
      <div className="w-[50%] ">
        <img className="" src="\src\assets\Admin Login.png" />
     </div>
     <div className="gap-2 p-36 h-96 w-auto flex justify-center text-pretty flex-col  font-sans shadow-lg shadow-slate-200">
     <h1 className="font-bold ">Welcome Admin! 👋🏻</h1>
     <p className="font-semibold" >Please sign-in to your account and start the adventure</p>
     <label>Email or username </label>
     <input type="text" className="border-blue-400  border-b bottom-1 rounded-l-md border" name='username' value={input.username} onChange={handinput} />
     <label>Password</label>
     <input type="password" className="border-red-400   border-b bottom-1 rounded-l-md border" name='password' value={input.password} onChange={handinput} />
     <p className="cursor-pointer hover:text-red-700">Forgot password?</p>
     <button className="bg-emerald-300 " onClick={getLogin}>Login</button>
     </div>
    </div>

    </>
)
}

export default AdminLogin;
