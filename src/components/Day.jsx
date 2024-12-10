



export default function Day({dayNum,typeClass,isCurrDay}){
    console.log(isCurrDay)
    return(
        <div className={`${isCurrDay ? "current":"" } ${typeClass}`} id="day" >
            <div>{dayNum}</div>
        </div>
    )
}