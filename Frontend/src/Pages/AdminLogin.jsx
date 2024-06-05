import axios from "axios";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
const AdminLogin=()=>{



  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
const [input,setinput] = useState("");
const [error, setError] = useState('');
console.log(input);
let  mynav=useNavigate()
const handinput=(e)=>{
const names =e.target.name;
const value =e.target.value;
 console.log(names,value);
  setinput(values=>({...values,[names]:value}));
  console.log(input);
}
const getLogin=(e)=>{

  e.preventDefault();
 let url ="http://localhost:8000/Admin/checkadmin"
axios.post(url,input)  
.then(result => {
  if(result.data === "Success"){
    window.localStorage.setItem("username", input.username)
mynav("../Dashboard")
alert("successfully login")
      }
    else{ 
      setError(result.data);
    
}})
}
return( <>
<form className=""  onSubmit={getLogin} >
<div className=" flex overflow-y-hidden p-20   object-cover shadow-lg shadow-slate-800">
      <div className="w-[50%] ">
        <img className="" src="\src\assets\Admin Login.png" />
     </div>
     <div className="gap-2 p-36 h-96 w-auto flex justify-center text-pretty flex-col  font-sans shadow-lg shadow-slate-200">
     <h1 className="font-bold ">Welcome Admin! 👋🏻</h1>
     <p className="font-semibold" >Please sign-in to your account and start the adventure</p>
     <label htmlFor="username">Email or username </label>
     <input type="text" id="username" className="border-blue-400  border-b bottom-1 rounded-l-md border" name='username' value={input.username} onChange={handinput} required />
     <label htmlFor="password">Password</label>
     <input type="password" id="password" className="border-red-400   border-b bottom-1 rounded-l-md border" name='password' value={input.password} onChange={handinput} required />
     <p className="cursor-pointer hover:text-red-700">Forgot password?</p>
     {error && <p style={{ color: 'red' }}>{error}</p>}
     <button className="bg-emerald-300 " type="submit">Login</button>
     </div>
    </div>
</form>
    </>
)
}

export default AdminLogin;
