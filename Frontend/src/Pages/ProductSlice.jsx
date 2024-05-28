import { createSlice } from "@reduxjs/toolkit";
const initialState={
cart:[]
}
const ProductSlice=createSlice({

name:"cartProduct",
initialState:initialState,

reducers:{
addtocart:(state,action)=>{ 
    var myitem=state.cart.filter((key)=>key.id===action.payload.id);
    if(myitem.length>=1)
    {
        alert ("product alradey add") 
    }
else{
        state.cart.push(action.payload)
}}
,CartRemove:(state ,action)=>
        {state.cart=state.cart.filter(item=>item.id!==action.payload) 
        },

    proQtyInc:(state,action)=>{
            for(var i=0;i<state.cart.length;i++)
            {
                if (state.cart[i].id===action.payload)
                {
                    state.cart[i].qnty++;
                }
            }
        
        },
        proQtyDec:(state,action)=>
        {
            for(var i=0;i<state.cart.length;i++)
            {
                if (state.cart[i].id===action.payload)
                {
                    if(state.cart[i].qnty>1)
                     {state.cart[i].qnty--;
                    }
                     else
                     {
                        alert("atlist one product buy")
                     }
                       
                    }
            }
}

}})

export const { addtocart,CartRemove, proQtyInc,proQtyDec,Cartimpt} =ProductSlice.actions
export default ProductSlice.reducer;
