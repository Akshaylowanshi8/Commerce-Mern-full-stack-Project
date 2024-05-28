
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


const ShopbyCatagry=()=>{
return(<>
<div className="flex ">
<div className="w-56 bg-slate-700 h-screen   sticky top-28">
<div className=""><Link to="laptop">Laptop</Link></div>
<div className=""><Link to="mobile">Mobiles</Link></div>
<div className=""><Link to="headphone">Mobile accessories</Link></div>
<div className=""><Link to="smartwatch">smart watchs</Link></div>

</div>
<div className="">

<Outlet />

</div>
</div>
</>)


}

export default ShopbyCatagry;