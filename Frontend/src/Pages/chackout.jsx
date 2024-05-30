
import axios from 'axios';
import React, { useState } from 'react';
import { useSelector} from "react-redux";

const Chackout=()=>{
    const mydata= useSelector((state)=>state.cartProduct.cart)
    let totalAmount=0;
    let productDetails="";
    let image='';
const pro =mydata.map((key) =>{
  totalAmount+=key.qnty*key.Price;
  productDetails+=key.Name+" qty :"+key.qnty ;
  image=key.Imgurl;
  return(<>
<div class="flex justify-between mb-4">
            <div className="flex items-center">
            <div className="relative overflow-hidden p-3 m-3">
                    <img className="object-cover w-24 h-24" src={key.Imgurl} alt="Product" />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>
                <div>
                    <h2 className="font-bold">{key.Name}</h2>
                    <p className="text-gray-700">{key.Detail}</p>
                </div>
            </div>
            <div className="flex items-center">
                <button className="text-red-500 hover:text-red-700"><i class="fas fa-trash"></i></button>
                <div className="mx-4">
                {key.qnty}
                </div>
                <span className="font-bold">{key.qnty*key.Price}</span>
            </div>
        </div>
  </>)})
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        city: '',
        state: '',
        pinCode: '',
        mobile:""
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

     
    const [myproduct,setMyProduct] = useState({
      price: totalAmount ,
      name:productDetails,
      img:image

});


const initPay = (data) => {
const options = {
  key : "rzp_test_42qRZrsYMWKlBA",
  amount: data.amount,
  currency: data.currency,
  name: myproduct.name,
  image:myproduct.img,
  description: "my good t shirt",
  order_id: data.id,
  handler: async (response) => {
    try {
      const verifyURL = "https://localhost:8000/payment/verify";
       await axios.post(verifyURL,response);
    } catch(error) {
      console.log(error);
    }
  },
  theme: {
    color: "#3399cc",
  },
};

const razor = new window.Razorpay(options);
razor.open();
};
const handlePay =async()=>{
  try {
    const orderURL = "http://localhost:8000/payment/orders";
    const {data} = await axios.post(orderURL,{amount: myproduct.price, productitems:myproduct.name,...formData } );
    console.log(data);
    initPay(data.data);
  } catch (error) {
    console.log(error);
  }
}
return(<>
<div className="flex mt-0">
 <form  className="bg-gray-100 dark:bg-gray-900 w-1/2">
      <div className="w-full max-w-3xl mx-auto p-8">
      <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
      <h1 class="text-2xl font-bold mb-6">Shipping Address</h1>
      <div className="">
        <label htmlFor="fullName" className="block text-gray-700 dark:text-white mb-1">Full Name</label>
        <input type="text" required id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
      </div>
      <div className="mb-4">
        <label htmlFor="address"  className="block text-gray-700 dark:text-white mb-1">Address</label>
        <input type="text" required id="address" name="address" value={formData.address} onChange={handleChange} className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="block text-gray-700 dark:text-white mb-1">City</label>
        <input type="text" required id="city" name="city" value={formData.city} onChange={handleChange} className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
      </div>
      <div className="mb-4">
        <label htmlFor="state" className="block text-gray-700 dark:text-white mb-1">state</label>
        <input type="text" required id="state" name="state" value={formData.state} onChange={handleChange} className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
      </div>
      <div className="mb-4">
        <label htmlFor="pinCode" className="block text-gray-700 dark:text-white mb-1">Pin Code</label>
        <input type="text" required id="pinCode" name="pinCode" value={formData.pinCode} onChange={handleChange} className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
      </div>
      <div className="mb-4">
        <label htmlFor="mobile" className="block text-gray-700 dark:text-white mb-1">Mobile</label>
        <input type="text" required id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
      </div>
    </div>
      </div>
    </form>
    {/* ................form end ............ */}
    <div class="flex flex-col justify-center items-center min-h-screen ">
    <div class="bg-gray-100 rounded-lg shadow-lg h-full p-6 w-">
        <h1 class="text-2xl font-bold mb-6">Shopping Cart</h1>
       {pro}
        <hr class="my-4"/>
        <div class="flex justify-between items-center">
            <span class="font-bold">Subtotal:</span>
            <span class="font-bold">   {totalAmount}</span>
        </div>
        <div class="flex justify-between items-center mt-4">
            <span>Taxes:</span>
            <span>00</span>
        </div>
        <hr class="my-4"/>
        <div class="flex justify-between items-center">
            <span class="font-bold">Total:</span>
            <span class="font-bold"> {totalAmount} </span>
        </div>
        <div class="flex justify-center mt-6">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handlePay}
            >PayNow</button>
        </div>
    </div>
</div>
      </div>
</>)
}
export default Chackout;