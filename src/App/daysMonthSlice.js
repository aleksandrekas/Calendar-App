import { createSlice } from "@reduxjs/toolkit";



const daysMonthSlice = createSlice({
    name:"monthDays",
    initialState:{
        date: new Date(),
        firstDayOfMonth: 0,
        totalDays:0,
        paddingDays:0
    },
    reducers:{
        setDaysInMonth: (state,action)=> {
            state.firstDayOfMonth =  action.payload.firstDayOfMonth;
            state.totalDays = action.payload.totalDays;
            state.paddingDays = action.payload.paddingDays
        }
    }
})


export const {setDaysInMonth} = daysMonthSlice.actions
export default  daysMonthSlice.reducer 