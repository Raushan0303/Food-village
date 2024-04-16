import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items: []
    },
    reducers:{
        addItem: (state, action) =>{
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
})


/**
 * addItem is the action and the function next to it is reducer Fucntion 
 * which basically modify the slice of your store
 * this reducer function take two parameter
 * it gets access to the state and also it gets access to the action
 * state is initialState which is empty right now
 * and now it will modify our state based on our action
 */