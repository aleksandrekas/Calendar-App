import { configureStore } from "@reduxjs/toolkit";
import monthDays from "./daysMonthSlice.js"
import modalStatus from "./modalSlice.js"
import eventsSlice from "./eventsSlice.js"

export const store = configureStore({
    reducer:{
        monthDays,
        modalStatus,
        eventsSlice
    }
})