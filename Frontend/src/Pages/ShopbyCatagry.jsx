
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


const ShopbyCatagry=()=>{
return(<>
<div className="flex  ">
<div className="w-56 bg-slate-700 h-screen  font-bold  text-white sticky top-28">
<div className=" p-7  hover:text-orange-400 "><Link to="laptop">Laptop</Link></div>
<div className=" p-7  hover:text-orange-400 "><Link to="mobile">Mobiles</Link></div>
<div className=" p-7  hover:text-orange-400 "><Link to="headphone">Mobile accessories</Link></div>
<div className=" p-7  hover:text-orange-400 "><Link to="smartwatch">smart watchs</Link></div>

</div>
<div className="">

<Outlet />

</div>
</div>
</>)


}

export default ShopbyCatagry;