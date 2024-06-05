import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const UserSignup=()=>{
  const [formData, setformData] = useState("")

  let mynav =useNavigate()
    
  const handleChange=(e)=>{
    e.preventDefault();
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
  .then(
  res =>alert(res.data))
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
<form className=""onSubmit={handleSubmit}>
<div className=" flex justify-center items-center ">
      <div className="bg-transparent  scale-90 p-6 rounded shadow-black shadow-2xl w-full  sm:w-96">
        <h2 className="text-2xl font-bold ">User Registration</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-gray-50">Full Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600" placeholder="Enter your full name" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600" placeholder="Enter your email address" required />
          </div>
          <div className="mb-4">
            <label htmlFor="MobileNo" className="block text-gray-700 font-bold mb-2">Mobile Number</label>
            <input  id="MobileNo" name="MobileNo" value={formData.MobileNo} onChange={handleChange} className="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600" placeholder="Enter your email address" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600" placeholder="Enter your password" required />
          </div>
          <div className="mb-6">
            <label htmlFor="confirm_password" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
            <input type="password" id="confirm_password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600" placeholder="Confirm your password" required />
          </div>
          <div className="flex items-center justify-between">
            <button  type="submit" className="relative px-8 py-2 rounded-md bg-blue-600 isolation-auto z-10 border-2 border-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-blue-900 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">Register</button>
            <a href="UserLogin" className="text-violet-950 font-bold hover:underline">Already have an account?</a>
          </div>
      </div>
    </div>
</form>

    </>)


}


export default UserSignup;



<div class="max-w-[360px] w-full mx-auto bg-[#0d1b2a] rounded-lg shadow-md p-4">
  <form>
    <div class="mb-4">
      <label class="block mb-2 text-gray-50" for="name"> Name </label>
      <input
        placeholder="Your Name"
        class="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
        type="text"
      />
    </div>
    <div class="mb-4">
      <label class="block mb-2 text-gray-50" for="email"> Email </label>
      <input
        placeholder="Your Email"
        class="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
        name="email"
        id="email"
        type="email"
      />
    </div>
    <div class="mb-4">
      <label class="block mb-2 text-gray-50" for="message"> Message </label>
      <textarea
        placeholder="Your Message"
        class="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
        rows="4"
        name="message"
        id="message"
      ></textarea>
    </div>
    <div class="mb-4">
      <button
        class="w-full bg-[#F7AB0A] text-gray-700 font-semibold p-2 rounded transition-all hover:bg-[#FFC857]"
        type="submit"
      >
        Submit
      </button>
    </div>
  </form>
</div>