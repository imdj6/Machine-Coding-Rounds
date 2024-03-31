import {createSlice} from "@reduxjs/toolkit"

export const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:{
        addTocart:(state,action)=>{
            console.log("inside the reducer");
            console.log(action)
            state.cart.push(action.payload)
        },
        clearCart:(state,action)=>{
            state.cart.length=0;
        }
    }
})
export default cartSlice.reducer;

export const {addTocart,clearCart}=cartSlice.actions; 
