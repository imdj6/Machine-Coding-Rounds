import {configureStore} from "@reduxjs/toolkit"
import cart from "../reducers/CartSlice"
export const store=configureStore({
    reducer:{
       cart 
    }
})