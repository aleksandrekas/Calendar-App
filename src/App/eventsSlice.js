import { createSlice } from "@reduxjs/toolkit";


const eventsSlice = createSlice({
    name:'eventsSlice',
    initialState:{
        events: localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [],
        date:''
    },
    reducers:{
        addTargetDate:(state,action)=>{
            state.date = action.payload
        },
        addEvent:(state,action)=>{
            state.events.push(action.payload)
        },
        addNextEvent: (state, action) => {
            const { index, input } = action.payload;
            if (state.events[index]?.title) {
                state.events[index].title.push(input);
            }
        },
        removeEvent:(state,action)=>{
            const { index, eventIdx } = action.payload;
            state.events[index].title.splice(eventIdx,1);
        }
    }
})


export const {addTargetDate,addEvent,addNextEvent,removeEvent} = eventsSlice.actions
export default eventsSlice.reducer