import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    message : "Hello, World!"
};

const firstSlice = createSlice({
    name: "first",
    initialState,
    reducers: {
        updateMessage : (state, {payload}) =>{
            state.message = payload;
        }
    }
});

export const {updateMessage} = firstSlice.actions;

export const messageSelector = state => state.first.message;

export default firstSlice.reducer;