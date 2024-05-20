import MessageContext from "../context/messages"
import { useContext } from "react"

const MessagingComponent = function() {
    const { messages , refreshMessages }  = useContext(MessageContext)
    return (
        <div>
            <h1> LinkedIn Messaging </h1> <button onClick={() => {
                    refreshMessages();
                }}> Refresh</button><br/><br/>
            { messages.map((val, idx) => {
                return <div key={val.id}>{val.id} : {val.sender} : {val.message}</div>
            })}    
        </div>
    )
} 

export default MessagingComponent