import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItemToCart(state,action){
            const existingItem =state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem){
                existingItem.quantity +=1;
            } else {
                state.cartItems.push({ ...action.payload, quantity:1});
            }
        },
        removeItemFromCart(state,action){
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        clearCart(state){
            state.cartItems=[];
        },
        increaseItemQuanity(state,action){
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToIncrease){
                itemToIncrease.quantity += 1;
            }
        },
        decreaseItemQuatity(state,action){
            const itemToDecrease =state.cartItems.find(item => item.id === action.payload);
            if (itemToDecrease && itemToDecrease >1){
                itemToDecrease.quantity -=1;
            }
        },
    },
    
});

const initialState =({
    cartItems:[],
});


export const{
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuanity,
    decreaseItemQuatity,
} = CartSlice.actions;

export default CartSlice.reducer;