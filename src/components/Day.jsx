

function handleDayClick(dayString){
    console.log(dayString)
}

export default function Day({dayNum,typeClass,isCurrDay,funcArg}){
    return(
        <div onClick={()=>handleDayClick(funcArg)} className={`${isCurrDay ? "current":"" } ${typeClass}`} id="day" >
            <div>{dayNum}</div>
        </div>
    )
}