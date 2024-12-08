import Day from "./Day"

export default function Calendar({days , nav}){
    const {totalDays,paddingDays} = days
    const date = new Date()

    return (
        <div id="calendarBody">
            {Array.from({length:paddingDays}).map((_,index)=>{
                return <Day key={index} clas={'paddingDay'} />
            })}
            {Array.from({length:totalDays}).map((_,index)=>{
                const isToday =
                    nav === 0 &&
                    index + 1 === date.getDate() &&
                    date.getFullYear() === new Date().getFullYear() &&
                    date.getMonth() === new Date().getMonth();

                    
                return <Day key={index} clas={isToday? 'current' : ''} content={index + 1} />
            })}
        </div>
    )   
}