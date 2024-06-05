import { Link, Outlet,useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import Footer from "./Footer";
import ScrollToTop from "react-scroll-to-top";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { IoIosLogOut } from "react-icons/io";

const Layout=()=>{
  let mynav=useNavigate();

let username= window.localStorage.getItem("username")
    // const dispatch=useDispatch();
    // gatting data from cart or slice
const mydata= useSelector((state)=>state.cartProduct.cart)
console.log(mydata);


useEffect(() => {
window.scrollTo(0, 0)
}, [])


const userlogout=()=>{
window.localStorage.clear();
alert("So are you sure...")
mynav("/home")

}

return(
    <>

<div className=" flex justify-around h-12 bg-[rgb(18,156,184)] align-middle">
      <div className="align-middle p-3">Tell a friends about Electshop Electronics & get 30% off your next order.</div>
   <div className="">
    <ul className="flex gap-9 p-3">
        <li className=""> Need Help?</li>
        <li className=""> Gift Cards</li>
        <li className="">
          <select className="text-black" >
            <option value="A">English</option>
            <option value="B">Hindi</option>
          </select>
        </li>
    </ul>
   </div>
</div>
<div className=" flex justify-around p-2 sticky top-0 text-3xl  z-10 bg-white">
<div className=""><img alt="coming" src="\src\assets\logo-1658212097.jpg" /></div>
    
<div className="">
    <input className="p-1  border-b bottom-1 rounded-l-md border border-gray-300" type="text" placeholder="Search.." name="search" />
    <button className="bg-slate-600 p-2 border-l-2 rounded-r-md absolute" type="submit">
    <FaSearch />
    </button>
</div>
   <div className="">
    <ul className="flex gap-9 p-3">

        <li className=""><p className="flex h-2 w-2 absolute items-center justify-center rounded-full  bg-[rgb(18,156,184)] p-3 ml-6 font-black text-xs text-white">{mydata.length}</p> <Link to="cart"><FaCartPlus /> </Link> </li>
        <li className=""> <Link to="AdminLogin"> <RiAdminFill title="adminuser" /></Link></li>
     
      {!username?<><li className=""><Link to="UserLogin"> <FaRegUser  title="user"/></Link></li> </>:<><li><button className="" onClick={userlogout}> <IoIosLogOut title="Logout"/></button></li> <li>{username}</li> </> }
    </ul>
    </div>
</div>
<div className="flex justify-center shadow-md sticky top-[70px] z-10 bg-white">
<ul className=" flex gap-9 p-3">
   <li className=""><Link to="home"> Home</Link></li> 
   <li className=""><Link to="shop">Shop</Link></li> 
   <li className=""><Link to="ShopbyCatagry">Shop by Catagry</Link></li> 
   {/* <li className=""><Link to="SmartWatchs">Smart Watchs</Link></li>  */}
   {/* <li className=""><Link to="NewArrivals">New Arrivals</Link></li>  */}
   <li className=""><Link to="about">About us</Link></li> 
   <li className=""><Link to="Contect">Contect us</Link></li> 
   {/* <li className=""><Link to="allbrands">All Brands</Link></li>  */}
   </ul>
    </div>
    <Outlet /> 
    <Footer />
    <div style={{ marginTop: "1px" }} >
      <ScrollToTop smooth  style={{ marginTop: "100vh", textAlign:"center",justifyContent:"center", background:"#aaaaaa", padding:"3px"}} />
    </div>
    </>
)
}

export default Layout;