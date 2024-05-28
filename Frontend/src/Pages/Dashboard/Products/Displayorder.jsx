
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const DisplayOrder=()=>{


    const [Data ,setDate]=useState([])


 let LoadData=async()=>{
  let  url="http://localhost:8000/Admin/DisplayOrder"

 await axios
    .get(url)
    .then(res =>setDate(res.data))
    .catch(err => console.error(err));      
    }
    useEffect(() => {
        
    LoadData();
    }, []);


let  ans =Data.map((e,i)=>{
return(<>
<tr className="">
       <td className="">{i+1}</td>
       <td className="">{e.dop}</td>
       <td className="">{e.amount}</td>
       <td className=" whitespace-nowrap">{e.fullName}</td>
       <td className=" whitespace-nowrap">{e.mobile}</td>
       <td className="whitespace-nowrap">{e.city}</td>
       <td className=" whitespace-nowrap">{e.address}</td>
       <td className=" whitespace-nowrap">{e.state}</td>
       <td className="whitespace-nowrap">{e.pincode}</td>
       <td className="">{e.productitems}</td>
       <td ><button className="px-2 py-2 bg-cyan-400">order placed</button></td>
      

    
       </tr>



</>)



})


    return(<>
    
    <table className="">
<tr >
       <th className=" bg-gray-50 text-center  font-medium text-gray-500 uppercase tracking-wider">S.no</th>
       <th className=" bg-gray-50 text-center  font-medium text-gray-500 uppercase tracking-wider">dop</th>
       <th className=" bg-gray-50 text-center font-medium text-gray-500 uppercase tracking-wider">amount</th>
       <th className=" bg-gray-50 text-center font-medium text-gray-500 uppercase tracking-wider">fullName</th>
       <th className=" bg-gray-50 text-center  font-medium text-gray-500 uppercase tracking-wider">mobile</th>
       <th className=" bg-gray-50 text-center  font-medium text-gray-500 uppercase tracking-wider">city</th>
       <th className=" bg-gray-50 text-center  font-medium text-gray-500 uppercase tracking-wider">address</th>
       <th className=" bg-gray-50 text-center  font-medium text-gray-500 uppercase tracking-wider">state</th>
       <th className=" bg-gray-50 text-center  font-medium text-gray-500 uppercase tracking-wider">pincode</th>
       <th className=" bg-gray-50 text-center  font-medium text-gray-500 uppercase tracking-wider">productitems</th>
       <th><button className="px-2 py-2 bg-cyan-400" >status</button></th>
      
       </tr>
    {ans}
    
</table>
    
    </>)
    
    }
    
    
    export default DisplayOrder;