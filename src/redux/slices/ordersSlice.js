// ordersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orders: [],
    currentOrder: null,
};

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addOrder: (state, action) => {
            state.orders.push(action.payload);
            state.currentOrder = action.payload;
        },
        clearCurrentOrder: (state) => {
            state.currentOrder = null;
        }
    }
});

export const { addOrder, clearCurrentOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
