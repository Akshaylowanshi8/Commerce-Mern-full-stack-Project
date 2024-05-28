import { configureStore } from "@reduxjs/toolkit";

import ProductReducer from "./Pages/ProductSlice"

const store=configureStore({

    reducer:{
        
        cartProduct:ProductReducer
     

}})

export default store