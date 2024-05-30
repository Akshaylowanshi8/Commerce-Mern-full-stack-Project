import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react';
import Home from './Pages/Home';
import About from './Pages/Aboutus';
import Layout from './Pages/Layout';
import TodaysDeal from './Pages/ShopbyCatagry';
import AdminLogin from './Pages/AdminLogin';
import AllBrands from './Pages/AllBrands';
import NewArrivals from './Pages/NewArrivals';
import SmartWatchs from './Pages/shopbycategry/SmartWatchs';
import UserLogin from './Pages/UserLogin';
import Dashboard from './Pages/Dashboard/Dashboard';
import Addproduct from './Pages/Dashboard/Products/Addproduct';
import Summary from './Pages/Dashboard/Summary';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import 'aos/dist/aos.css';
import Aos from 'aos';
import UserSignup from './Pages/UserSignup';
import Products from './Pages/Dashboard/Products/Products';
import DeleteProducts from './Pages/Dashboard/Products/DeleteProducts';
import UpdateProducts from './Pages/Dashboard/Products/UpdateProduct';
import Chackout from './Pages/chackout';
import DisplayOrder from './Pages/Dashboard/Products/Displayorder';
import ShopbyCatagry from './Pages/ShopbyCatagry';
import Mobiles from './Pages/shopbycategry/mobile';
import Headphones from './Pages/shopbycategry/headphone';
import Laptop from './Pages/shopbycategry/Laptop';
import Contect from './Pages/Contect';


const App=()=> {

  useEffect(() => {
    Aos.init({duration:2000})
  }, []);
  
return (
<>
<BrowserRouter>
<Routes>
<Route path='/' element={<Layout/>}>
  <Route index element={ <Home/> } />
  <Route path='home' element={ <Home />}/>
  <Route path='shop' element={ <Shop />}/>
  <Route path='about' element={ <About />}/> 
  <Route path='Contect'element={<Contect />}/>
  <Route path='cart' element={<Cart />} />
  <Route path='allbrands' element={<AllBrands />} />
  <Route path='ShopbyCatagry' element={<ShopbyCatagry />}>

      <Route index element={<Shop />}/>
      <Route path='smartwatch'element={<SmartWatchs/>} />
      <Route path='mobile'element={<Mobiles/>} />
      <Route path='laptop'element={<Laptop />} />
      <Route path='headphone'element={<Headphones/>} />

  </Route>


  {/* <Route path="SmartWatchs" element={<SmartWatchs />}/> */}
  <Route path='NewArrivals' element={<NewArrivals />}/>
  <Route path='UserLogin' element={<UserLogin />} />
  <Route path='chackout' element={<Chackout />}/>

   </Route>

<Route path='Dashboard' element={<Dashboard />}>
   <Route index element={<Summary />}/>
  
  <Route path='summary' element={<Summary />}/>
  <Route path='Product' element={<Products />}/>
  <Route path='addProduct' element={<Addproduct />}/>
  <Route path='DisplayOrder' element={<DisplayOrder />}/>
  

  <Route path='deleteProduct' element={<DeleteProducts />}/>
  <Route path='UpdateProduct/:id' element={<UpdateProducts />}/>
  </Route>
<Route path='AdminLogin' element={<AdminLogin />} />
<Route  path="usersignup" element={<UserSignup /> } />

</Routes>
</BrowserRouter>
</>
)
}

export default App ;
