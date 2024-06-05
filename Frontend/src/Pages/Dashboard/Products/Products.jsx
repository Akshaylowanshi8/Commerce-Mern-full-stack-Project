
import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';


const Products=()=>{
  let mynav=useNavigate();



const [AllProduct,setAllProduct]=useState([])

//---------------- display: data---------------
const LoadAllProduct=()=>{
  axios
        .get("http://localhost:8000/Displayproduct/LoadAllProduct")
        .then(res =>setAllProduct(res.data)    
                )
     
      }
       useEffect(() => {
          LoadAllProduct()       
        }, []);

const Delhand= async(id )=>{
  await axios
  .post("http://localhost:8000/Admin/DelproductData",{id:id})
  .then(res =>{alert(res.data)

    LoadAllProduct()   ;    
  })  
}

const updhand=(id)=>{

mynav("../UpdateProduct/"+id)

}

       let AllPro = AllProduct.map((key,i=0)=>{
      return(<>
    <div className="shadow overflow-hidden rounded-md">
          <ul className="divide-y divide-gray-200">
            {/* Sample item */}
            <li className="flex  justify-between py-4 px-6">
              <div className="flex items-center">
            <p className="">{i+1}</p>
                <img src={key.Imgurl} alt="Item" className="h-16 w-16  object-cover" />
                <div className="ml-4 text-left">
                  <p className="text-lg font-semibold">{key.Name}</p>
                  <p className="text-slate-950">Detail:{key.Detail}</p>
                  <p className="text-gray-800">Price:{key.Price}</p>
                  <p className="text-gray-800">Category :{key.Category}</p>
                  <p className="text-gray-800">Tag :{key.Tag}</p>
                  <p className="text-gray-800"> Brand:{key.Brand}</p>
                </div>
              </div>
              <div className="flex items-center">
              <button className="flex   items-center justify-center    bg-red-600 hover:bg-[rgb(18,156,184)] p-3  font-black text-xs text-white" onClick={()=>{Delhand(key._id)}}>Delete</button>
               <button className="flex   items-center justify-center   bg-yellow-900 hover:bg-red-400 p-3  font-black text-xs text-white"   onClick={()=>{updhand(key._id)}} >Update</button>
              </div>
                           
            </li>
            {/* End of sample item */}
          </ul>
        </div>
        </>
            )})
return(<>
{AllPro}
</>)

}


export default Products;