// features/productSlice.js
import { createSlice } from "@reduxjs/toolkit";
import Products from "../data/data";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: Products.map(product => ({ ...product, quantity: 1 })),
        totalItems: 3,
        totalPrice: 7700,
    },
    reducers: {
        increment: (state, action) => {
            const productId = action.payload;
            const product = state.products.find(p => p.id === productId);

            if (product) {
                product.quantity += 1;
                state.totalItems += 1;
                state.totalPrice += product.price;
            }
        },
        decrement: (state, action) => {
            const productId = action.payload;
            const product = state.products.find(p => p.id === productId);

            if (product && product.quantity > 1) {
                product.quantity -= 1;
                state.totalItems -= 1;
                state.totalPrice -= product.price;
            }
        },
        zero: (state, action) => {
            state.totalItems = 0;
            state.totalPrice = 0;
            state.products.forEach(product => {
                product.quantity = 0;
            });
        },
        remove: (state, action) => {
            const productId = action.payload;
            const product = state.products.find(p => p.id === productId);

            if (product) {
                state.totalItems -= product.quantity;
                state.totalPrice -= product.quantity * product.price;
                product.quantity = 0;
            }
        }
    }
});

export const { increment, decrement, zero, remove } = productSlice.actions;
export const selectCount = (state, productId) => {
    const product = state.product.products.find(p => p.id === productId);
    return product ? product.quantity : 0;
};
export const selectTotalPrice = state => state.product.totalPrice;

export default productSlice.reducer;
