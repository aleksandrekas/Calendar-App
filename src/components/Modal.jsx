import { useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { setState } from "../App/modalSlice"
import { addEvent,addNextEvent } from "../App/eventsSlice"


export default function Modal(){
    const [display,setDisplay] = useState('none')
    const [input,setInput] = useState('')
    const modalState = useSelector((state)=> state.modalStatus)
    const eventsSlice = useSelector((state)=> state.eventsSlice)
    const dispatch = useDispatch()

    const index = eventsSlice.events.findIndex((item)=>item.date === eventsSlice.date)

    const eventForCurrDay = eventsSlice.events.find((e)=> e.date === eventsSlice.date)


    useEffect(()=>{
        if (modalState) {
            setDisplay("flex");
        } else {
            setDisplay("none");
        }
    },[modalState])

    useEffect(()=>{
        localStorage.setItem('events',JSON.stringify(eventsSlice.events))
    },[eventsSlice.events])


    function handleModalCloseAction(){
        dispatch(setState(!modalState))  
    }

    function addNewEvent(e) {
        e.preventDefault(); 
        if (index >= 0) {

            dispatch(addNextEvent({ index, input }));
        } else {
            dispatch(
                addEvent({
                    date: eventsSlice.date,
                    title: [input],
                })
            );
        }
        setInput(""); 
        handleModalCloseAction(); 
    }

    

    

    return (
        <div style={{display:`${display}`}} id="modalBackground">
            <div id="modal">
                <h1 className={eventForCurrDay? '': "noEvent"}>{eventForCurrDay? eventForCurrDay.title:"No events to show"}</h1>
                <form  className="modalForm">
                    <input onChange={(e)=> setInput(e.target.value)} value={input} type="text" />
                    <button id="addEvent" className="modalBtn" onClick={addNewEvent}>Add event</button>
                    <button id="close" className="modalBtn" onClick={handleModalCloseAction}>Close</button>

                </form>
            </div>
        </div>
    )
}