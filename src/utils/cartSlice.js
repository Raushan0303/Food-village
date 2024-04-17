import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items: []
    },
    reducers:{
        //mutating the state over here
        addItem: (state, action) =>{
            // Vanialla(older) Redux => Don't Mutate the State, returning was mendatory
            // const newState = [...state]
            // newState.items.push(action.payload)
            // return newState
            
            // Redux Toolkit immer behind the scene it does the same thing as 
            // vanilalla Reduex do
            // We have to mutate the State
            state.items.push(action.payload);
        },
        removeItem: (state,action) => {
            state.items.pop();
        },
        clearCart: (state,action) => {

            // RTK- either Mutate the existing State or return a new state  
            state.items.length = 0; //[]

            // return {items:[]}; // this new [] will be replaced inside the originalState = []
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;


/**
 * addItem is the action and the function next to it is reducer Fucntion 
 * which basically modify the slice of your store
 * this reducer function take two parameter
 * it gets access to the state and also it gets access to the action
 * state is initialState which is empty right now
 * and now it will modify our state based on our action
 */

/**
 * Now how this is working behind the scene?
 * 
 * when we will do createSlice this createSlice will return an object inside cartSlice
 * cartSlice will something looks like this
 *   {
 *     action{
 *      addItems,
 *        } 
 *     reducer{
 *      
 *          }
 *     } ,
 * 
 * we are taking out these actions individually and exporting it like this
 * export const {addItem, removeItem, clearCart} = cartSlice.actions;
 * export default cartSlice.reducer;
 */