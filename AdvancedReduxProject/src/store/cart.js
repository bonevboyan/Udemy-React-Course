import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    isShown: false,
    items: [],
    totalItems: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        changeVisibilty(state) {
            state.isShown = !state.isShown;
        },
        addItem(state, action) {
            const newItem = action.payload;

            const existingItem = state.items.find(
                (item) => newItem.id === item.id
            );

            if (typeof existingItem === "undefined") {
                state.items = state.items.concat(newItem);
            } else {
                state.items = state.items.map((item) => {
                    if (item === existingItem) {
                        item.quantity++;
                    }
                    return item;
                });
            }
            state.totalItems++;
        },
        removeItem(state, action) {
            const itemId = action.payload;

            const existingItem = state.items.find((item) => itemId === item.id);

            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => itemId !== item.id);
            } else {
                state.items = state.items.map((item) => {
                    if (item === existingItem) {
                        item.quantity--;
                    }
                    return item;
                });
            }

            state.totalItems--;
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
