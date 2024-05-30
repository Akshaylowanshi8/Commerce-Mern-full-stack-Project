import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const UserSignup=()=>{
  const [formData, setformData] = useState("")

  let mynav =useNavigate()
    
  const handleChange=(e)=>{
   let names=e.target.name;
   let value =e.target.value;
   setformData(values=>({...values,[names]:value}));
   console.log(formData);

    }    
const handleSubmit =async() => {

  if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match.')
       return;
    }
try {
let url ="http://localhost:8000/user/usersignup"
axios.post(url,formData)
  .then(res =>alert(res.data))
      setformData({
        name: '',
        email: '',
        MobileNo:"",
        password: '',
        confirmPassword: '',
      });
      mynav("/UserLogin")}
   
     catch (error) {
          console.error('Error creating user:', error);
          alert('Failed to create user. Please try again later.');
        }
      };
    return(<>
<div className="">


<div className=" flex justify-center items-center ">
      <div className="bg-transparent  scale-90 p-6 rounded shadow-black shadow-2xl w-full  sm:w-96">
        <h2 className="text-2xl font-bold mb-6">User Registration</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" placeholder="Enter your full name" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" placeholder="Enter your email address" required />
          </div>
          <div className="mb-4">
            <label htmlFor="MobileNo" className="block text-gray-700 font-bold mb-2">Mobile Number</label>
            <input  id="MobileNo" name="MobileNo" value={formData.MobileNo} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" placeholder="Enter your email address" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" placeholder="Enter your password" required />
          </div>
          <div className="mb-6">
            <label htmlFor="confirm_password" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
            <input type="password" id="confirm_password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" placeholder="Confirm your password" required />
          </div>
          <div className="flex items-center justify-between">
            <button  onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Register</button>
            <a href="UserLogin" className="text-white font-bold hover:underline">Already have an account?</a>
          </div>
      </div>
    </div>
</div>

    </>)


}


export default UserSignup;