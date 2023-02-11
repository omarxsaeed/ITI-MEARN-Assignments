import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState: { cart: [] },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((movie) => movie.id !== action.payload);
        },
        increaseQuantity: (state, action) => {
            state.cart[action.payload].quantity += 1;
        },
        decreaseQuantity: (state, action) => {
            state.cart[action.payload].quantity -= 1;
        },
    },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
