import Day from "./Day"
import { useSelector } from "react-redux"

export default function Calendar(){
    const monthDaysState = useSelector((state) => state.monthDays);
    const today = new Date();
    const currentDay = today.toLocaleDateString('ka-GE', { day: 'numeric' });
    const currentMonth = today.toLocaleDateString('ka-GE', { month: 'numeric' }) - 1; 
    const currentYear = today.toLocaleDateString('ka-GE', { year: 'numeric' });


    console.log(currentDay,currentMonth,currentYear)
    return (
        <div id="calendarBody">
            {Array.from({length:monthDaysState.paddingDays}).map((_,index)=>(
                <Day key={index} typeClass={'paddingDay'} dayNum={''} />
            ))}
            {Array.from({length:monthDaysState.totalDays}).map((_,index)=>{
                const dayNum = index + 1; 
                const isToday =
                    dayNum === currentDay &&
                    monthDaysState.month === currentMonth &&
                    monthDaysState.year === currentYear;

                return(
                    <Day key={index} isCurrDay={isToday} typeClass={''} dayNum={dayNum} />
                )
            })}
        </div>
    )   
}