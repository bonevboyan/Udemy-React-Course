import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    isShown: false,
    notification: null,
    items: [],
    totalItems: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        replaceCart(state, action) {
            state.totalItems = action.payload.totalItems
        },
        changeVisibilty(state) {
            state.isShown = !state.isShown;
        },
        addItem(state, action) {
            const newItem = action.payload;

            const existingItem = state.items.find(
                (item) => newItem.id === item.id
            );

            if (typeof existingItem === "undefined") {
                state.items.push(newItem);
            } else {
                existingItem.quantity++;
            }
            state.totalItems++;
        },
        removeItem(state, action) {
            const itemId = action.payload;

            const existingItem = state.items.find((item) => itemId === item.id);

            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => itemId !== item.id);
            } else {
                existingItem.quantity--;
            }

            state.totalItems--;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            };
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
