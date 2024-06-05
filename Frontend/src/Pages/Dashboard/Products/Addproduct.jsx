import { useState } from "react";
import  axios  from 'axios';


const Addproduct=()=>{

const [input ,setinput]=useState({});
const [file ,setfile]=useState(" ")


const handFile=(e)=>{
setfile(e.target.files[0])
}

// console.log(file);
const handinput=(e)=>{
let name=e.target.name;
let value=e.target.value;
setinput(values=>({...values,[name]:value}))
// console.log(input);
}
const onsave = async()=>{
const formData=new FormData();
formData.append('file' ,file);
formData.append('upload_preset',"uyxjrpfg")
formData.append("cloud_name","dtom3zwun" )
const responce = await axios.post("https://api.cloudinary.com/v1_1/dtom3zwun/image/upload",formData)
// console.log(responce.data.url);
let api = "http://localhost:8000/Admin/AddproductData"
await axios.post(api,{...input,["imgurl"]:responce.data.url}).then((res) => {
    alert(res.data);
    console.log(input);
setinput({
    name:"",
    brand:"",
    price:"",
    Detail:" ",
    Category :"",
    Tag:""
})
setfile(" ")
})
}
return(<>
<div className="grid gap-2 md:grid-cols-2  mb-2 text-xl font-medium text-gray-900 dark:text-white bg-slate-500 ml-44 p-4 shadow-black shadow-2xl">
Product Name :<input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " name="name"  value={input.name} onChange={handinput} placeholder="Enter product Name" />

Product Category :  <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  name="Category" value={input.Category} onChange={handinput}>
        <option value="stl">Select  Category</option>
        <option value="Mobile">Mobile</option>
        <option value="Laptop">Laptop</option>
        <option value="Mobile accessories">Mobile accessories</option>
        <option value="smart watch">smart watch</option>
        <option value="Laptop accessories">Laptop accessories</option>
        <option value="Other">other</option>
     </select>
      {input.Category === "Laptop"?<> Product brand :<select  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="brand" value={input.brand} onChange={handinput}>
        <option value="">Select Brand</option>
        <option value="Lenovo">Lenovo</option>
        <option value="hp">hp</option>
        <option value="Dell">Dell</option>
        <option value="ASUS">ASUS</option>
        <option value="Microsoft">Microsoft</option>
        <option value="Acer">Acer</option>
        <option value="Apple">Apple</option>
        <option value="other">other</option>

     </select>  </>

:""}
{input.Category === "Mobile"? <>Product brand : <select  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="brand" value={input.brand} onChange={handinput}>
        <option value="">Select Brand</option>
        <option value="Lenovo">Lenovo</option>
        <option value="realme">realme</option>
        <option value="Samsung">Samsung</option>
        <option value="Nokia">Nokia</option>
        <option value="Apple">Apple</option>
        <option value="Redmi">Redmi</option>
        <option value="Vivo">Vivo</option>
        <option value="Oppo">Oppo</option>
        <option value="Itel">Itel</option>
        <option value="other">other</option>

        </select>  </>
:"" }
{input.Category === "Mobile accessories"?<>Product brand : <select  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="brand" value={input.brand} onChange={handinput}>
        <option value="">Select Brand</option>
        <option value="Lenovo">Lenovo</option>
        <option value="realme">realme</option>
        <option value="Samsung">Samsung</option>
        <option value="Nokia">Nokia</option>
        <option value="Redmi">Redmi</option>
        <option value="Oppo">Oppo</option>
        <option value="Itel">Itel</option>
        <option value="Apple">Apple</option>
        <option value="other">other</option>



        </select>  
</>
:"" }
{input.Category === "smart watch"? <>Product brand : <select  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="brand" value={input.brand} onChange={handinput}>
        <option value="">Select Brand</option>
        <option value="Lenovo">Lenovo</option>
        <option value="realme">realme</option>
        <option value="Samsung">Samsung</option>
        <option value="Nokia">Nokia</option>
        <option value="Redmi">Redmi</option>
        <option value="Oppo">Oppo</option>
        <option value="Itel">Itel</option>
        <option value="Apple">Apple</option>
        <option value="boAt">boAt</option>

        <option value="other">other</option>

        



        </select>  </>

:"" }
{input.Category === "Laptop accessories"? <>Product brand : <select  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="brand" value={input.brand} onChange={handinput}>
        <option value="">Select Brand</option>
        <option value="Lenovo">Lenovo</option>
        <option value="hp">hp</option>
        <option value="Zebronics">Zebronics</option>
        <option value="other">other</option>

        </select>  </>

:"" }
{input.Category === "Other"? "":"" }
        {input.Category === "stl"? <select  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="brand" value={input.brand} onChange={handinput}>
        <option value="">Select Brand</option>
        <option value="other">other</option>
        </select> :"" }









     Product Tag :  <select  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="Tag" value={input.Tag} onChange={handinput}>
        <option value="">Select Tag </option>
        <option value="Featured categories">Featured categories</option>
        <option value="Hot new releases">Hot new releases</option>
        <option value="Best sellers">Best sellers</option>
        <option value="Recommended for you">Recommended for you</option>
        <option value="Other">other</option>
     </select>
Product price :<input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="price" value={input.price} onChange={handinput} placeholder="Enter price" />
Product Detail :<input className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="Detail" value={input.Detail} onChange={handinput} placeholder=" Enter Detail" />
Product image:<input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  type="file" onChange={handFile}  />
<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "  onClick={onsave}>save</button>
</div>
</>)
}
export default Addproduct;