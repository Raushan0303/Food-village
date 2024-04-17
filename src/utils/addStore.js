import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';

const appStore = configureStore({
    reducer:{
        cart: cartReducer,
    } 
});

export default appStore;


/**
 * this is big reducer to our store 
 * which contain the small reducer 
 * like cart or othe if it presents
 */