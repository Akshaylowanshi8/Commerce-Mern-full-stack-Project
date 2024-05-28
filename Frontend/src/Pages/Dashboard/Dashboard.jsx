import { Link, Outlet, useNavigate } from "react-router-dom";
const Dashboard=()=>{
let username= window.localStorage.getItem("username")
    let mynav=useNavigate();
    const backtohome=()=>{
    window.localStorage.clear();
    alert("So are you sure...")
  mynav("../home")}
return(<>
<div className="flex justify-between p-7 bg-slate-300 ">
<div className=""><img alt="coming" src="\src\assets\logo-1658212097.jpg" /></div>
<h1 className="text-5xl font-bold font-sans">Welcome</h1>
<h1 className=""><button className="font-bold text-2xl text-yellow-50 border border-blue-500 rounded-md p-3  bg-blue-400"  onClick={backtohome} >Logout</button> </h1></div>
<div className=" flex">
<div className=" bg-slate-300 text-black text-center text-xl">
  <div className=" p-6"> <Link to="summary">Summary</Link></div>
  <div  className=" p-6"><Link to="Product">Products</Link></div>        
  <div  className=" p-6">  <Link to="addProduct">AddProducts</Link></div>  
  <div  className=" p-6"> <Link to="DisplayOrder">castumer Order</Link> </div>
</div>
<div className="  text-center justify-center w-[1300px] h-auto align-middle p-7">
<Outlet />
</div>
</div>
</>)
}
export default Dashboard;