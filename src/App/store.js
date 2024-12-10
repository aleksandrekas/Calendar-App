import { configureStore } from "@reduxjs/toolkit";
import monthDays from "./daysMonthSlice.js"



export const store = configureStore({
    reducer:{monthDays}
})