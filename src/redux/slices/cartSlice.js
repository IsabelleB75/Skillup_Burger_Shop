// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            // Vérifie si l'article est déjà dans le panier
            const itemIndex = state.findIndex(item => item.id === action.payload.id);

            if (itemIndex !== -1) {
                // Si l'article est déjà dans le panier, augmente la quantité
                state[itemIndex].quantity += 1;
            } else {
                // Sinon, ajoute le nouvel article avec une quantité de 1
                state.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    img: action.payload.img,
                    price: action.payload.price,
                    quantity: 1
                });
            }
        },
        removeFromCart: (state, action) => {
            // Trouve l'article dans le panier
            const itemIndex = state.findIndex(item => item.id === action.payload.id);

            if (itemIndex !== -1) {
                if (state[itemIndex].quantity === 1) {
                    // Si la quantité est 1, supprime l'article
                    state.splice(itemIndex, 1);
                } else {
                    // Sinon, diminue la quantité
                    state[itemIndex].quantity -= 1;
                }
            }
        },
        clearCart: (state) => {
            // Vide le panier
            return [];
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
