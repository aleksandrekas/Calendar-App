import { createSlice } from "@reduxjs/toolkit";


const modalSlice = createSlice({
    name: "modalStatus",
    initialState: false,
    reducers: {
        setState: (state, action) => action.payload 
    }
});


export const {setState} = modalSlice.actions
export default modalSlice.reducer