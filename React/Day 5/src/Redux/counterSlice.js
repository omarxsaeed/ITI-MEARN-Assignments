import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "Counter",
    initialState: { counter: 0 },
    reducers: {
        increaseCounter: (state) => {
            state.counter += 1;
        },
        decreaseCounter: (state) => {
            if (state.counter !== 0) {
                state.counter -= 1;
            }
        },
    },
});

export const { increaseCounter, decreaseCounter } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
