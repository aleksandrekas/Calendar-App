
import { useSelector,useDispatch } from "react-redux"
import { setState } from "../App/modalSlice"
import { addTargetDate } from "../App/eventsSlice"



export default function Day({dayNum,typeClass,isCurrDay,funcArg}){
    const modalStatus = useSelector((state)=> state.modalStatus)
    const eventsSlice = useSelector((state)=> state.eventsSlice)
    const dispatch = useDispatch()

    const firstDate = new Date(funcArg).setHours(0,0,0,0)
    const secondDate = new Date().setHours(0,0,0,0)

    function handleDayClick(dayString){
        if(firstDate >= secondDate){

            if(typeClass === "paddingDay"){
                dispatch(setState(modalStatus))                  
            }else{
                dispatch(setState(!modalStatus))
                dispatch(addTargetDate(dayString))      
            }
        }
    }

    const eventForCurrDay = eventsSlice.events.find((e)=> e.date === funcArg)

    console.log(firstDate>secondDate)
    


    return(
        <div onClick={()=>handleDayClick(funcArg)} className={`${isCurrDay ? "current":"" } ${typeClass}`} id="day" >
            <div>{dayNum}</div>
            <div id="eventDisplay">
                {eventForCurrDay?.title?.map((item, index) => (
                        <h6 key={`${funcArg}-${index}`}>{item}</h6>
                    ))}
            </div>
        </div>
    )
}