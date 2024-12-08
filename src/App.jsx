import { useEffect } from "react"
import Calendar from "./components/Calendar"
import { useState } from "react"

const dt = new Date() 


function App() {
  const [nav,setNav] = useState(0)
  const [month , setMonth] = useState(dt) 
  const [daysInMonth, setDaysInMonth] = useState({
    firstDayOfMonth: 0,
    totalDays:0,
    paddingDays:0
  });



  function handleNav(action){
    if(action === 'add'){
      setNav((state)=> state = state + 1 )
    }else{
      setNav((state)=> state = state - 1 )
    }
  }
  
  

  useEffect(()=>{

    const newMonth = new Date(dt.getFullYear(), dt.getMonth() + nav, 1);
    setMonth(newMonth)
    const firstDayOfMonth = newMonth.getDay();
    const totalDays = new Date(newMonth.getFullYear(), newMonth.getMonth() + 1, 0).getDate();
    const paddingDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; 
  
    setDaysInMonth({ firstDayOfMonth, totalDays, paddingDays });
  },[nav])



  return(
    <div id="container">
      <div id="setMonthDiv">
        <h4>{month.toLocaleDateString('en-US', { month: 'long'})}</h4>
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
      <Calendar nav={nav} days={daysInMonth}/>
    </div>
  )


}

export default App
