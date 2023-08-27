// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import ordersReducer from './slices/ordersSlice';

const rootReducer = {
    cart: cartReducer,
    orders: ordersReducer
};

const store = configureStore({
    reducer: rootReducer,
    // Aucun état préchargé puisque nous n'utilisons plus le localStorage
});

export default store;
