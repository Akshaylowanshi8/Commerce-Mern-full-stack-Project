import {addtocart} from "../ProductSlice"
import axios from "axios";
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";

const Laptop=()=>{

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const dispatch=useDispatch();
    const mydata= useSelector((state)=>state.cartProduct.cart)
    // console.log(mydata);
    const [AllProduct,setAllProduct]=useState([])
    const LoadAllProduct=()=>{
        axios
              .get("http://localhost:8000/Displayproduct/LoadLaptop")
              .then(res =>setAllProduct(res.data))
              }
             useEffect(() => {
                LoadAllProduct()       
              }, []);
           let AllPro = AllProduct.map((key)=>{
                return(<>
    
    
    <div class="bg-white rounded-lg  hover:shadow-2xl shadow-black  p-8 scale-[0.85]">
                    <div class="relative overflow-hidden  ">
                        <img class="object-cover w-full bg-white h-full" src={key.Imgurl} alt="Product" />
                        <div class="absolute inset-1 hover:shadow-gray-900 shadow-sm opacity-40"></div>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mt-4">{key.Name}</h3>
                    <p class="text-gray-500 text-sm mt-2">{key.Detail}</p>
                    <div class="flex items-center justify-between mt-10 ">
                        <span class="text-gray-900 font-bold text-lg">₹{key.Price} </span>
                        <button class="bg-violet-600 text-white py-3  px-5 rounded-sm font-bold hover:bg-violet-950"
                        
                        onClick={
                    ()=>{dispatch(addtocart({
                        id:key._id,
                        Detail:key.Detail,
                        Imgurl:key.Imgurl,
                        Name:key.Name,
                        Price:key.Price ,
                        qnty:1,
                        }))}}
                        >Add to Cart</button>
                    </div>
                </div>
    
    
    
            
                </>)
              }
              )
          
        return(<>
    
    <div class=" bg-amber-300 py-16">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-stone-900 mb-8">Introducing Our Laptops</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
             {AllPro}
          
            </div>
    
        </div>
    </div>
        </>)
    
    
    }
    
    export default Laptop;