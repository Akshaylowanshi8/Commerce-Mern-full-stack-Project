import { CartRemove,proQtyInc,proQtyDec } from "./ProductSlice";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Cart=()=>{
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

let mynav= useNavigate()
  const chackoutbtn=()=>{

    if(TotalPrice===0)
      { window.location.reload();
        alert("please buy sum products")
      }

mynav("/chackout")
  }
const mydata= useSelector((state)=>state.cartProduct.cart)
// console.log(mydata);
const dish=useDispatch();
const remove=(myid)=>{
dish(CartRemove(myid));}
const handinc=(id)=>{
  dish(proQtyInc(id));
}
const handdec=(id)=>{
  // alert("run")

  dish(proQtyDec(id));
}


// counting of total price 
let TotalPrice=0;
for(let i=0;i<mydata.length;i++){
  TotalPrice+=mydata[i].qnty*mydata[i].Price;
}
const pro =mydata.map((key,i) =>{
    return(
<div className="shadow overflow-hidden rounded-md">
          <ul className="divide-y divide-gray-200">
            {/* Sample item */}
            <li className="flex items-center justify-between py-4 px-6">
              <div className="flex items-center">
            <p className="">{i+1}</p>

                <img src={key.Imgurl} alt="Item" className="h-12 w-12  object-cover" />
                <div className="ml-4">
                  <p className="text-lg font-semibold">{key.Name}</p>
                  <p className="text-slate-950">{key.Detail}</p>
                  <p className="text-gray-800">Rate:{key.Price}</p>
                </div>
              </div>
              <div className="flex items-center">
              <p className="text-green-700 font-semibold text-2xl px-4">Price:{key.qnty*key.Price}</p>
            <div className=" p-2 border-gray-300 border rounded-md text-center">
            <button x-on:click="count++" class="p-2 border rounded-full hover:bg-gray-100" onClick={()=>handinc(key.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
    </button> 
    <span x-text="count" class="p-3"> {key.qnty}</span>
    <button x-on:click="count--" class="p-2 border rounded-full hover:bg-gray-100"
    onClick={()=>handdec(key.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
    </button>
             </div>
               
               
               
               
                <button onClick={()=>{remove(key.id)}} className="ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md">Remove</button>
              </div>
            </li>
            {/* End of sample item */}
          </ul>
        </div>)
     })

return(
<>
      <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>
      <div className="flex flex-col">
        {/* Cart items */}
       {pro}
    
      {/* End of cart items */}

        {/* Cart summary */}
        <div className="mt-8 bg-white shadow rounded-md p-6">
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold">Total</p>
            <p className="text-4xl font-semibold">{TotalPrice}/-</p>
          </div>
          <div className="flex justify-between">
            <Link to="/home" className="text-gray-600 hover:underline">Continue Shopping</Link>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md" onClick={chackoutbtn}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
    </>
)


}

export default Cart;

