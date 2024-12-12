import { useEffect } from "react"
import Calendar from "./components/Calendar"
import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { setDaysInMonth } from "./App/daysMonthSlice"
// const dt = new Date() 


function App() {
  const monthDaysState = useSelector((state) => state.monthDays);
  const dispatch = useDispatch()
  const [nav,setNav] = useState(0)
  const [month , setMonth] = useState(monthDaysState.date) 



  function handleNav(action){
    if(action === 'add'){
      setNav((state)=> state = state + 1 )
    }else{
      setNav((state)=> state = state - 1 )
    }
  }

  
  

  useEffect(()=>{

    const newMonth = new Date(monthDaysState.date.getFullYear(), monthDaysState.date.getMonth() + nav, 1);
    setMonth(newMonth)
    const firstDayOfMonth = newMonth.getDay();
    const totalDays = new Date(newMonth.getFullYear(), newMonth.getMonth() + 1, 0).getDate();
    const paddingDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; 
    dispatch(setDaysInMonth({firstDayOfMonth,totalDays,paddingDays}))
    
  },[nav])



  return(
    <div id="container">
      <div id="setMonthDiv">
        <h4>{month.toLocaleDateString('ka-GE', { month: 'long'})}</h4>
        <div id="buttons">
          <button onClick={()=> handleNav("subtract")}>Previous</button>
          <button onClick={()=> handleNav("add")}>Next</button>
        </div>
      </div>
      <div id="daysHeader">
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>
        <div>Sunday</div>
      </div>
      <Calendar />
    </div>
  )


}

export default App
