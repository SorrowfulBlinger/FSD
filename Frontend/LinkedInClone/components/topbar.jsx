import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import MessageContext from '../context/messages'
import NotificationsContext from '../context/notifications'

const TopBarComponent = function({data}) {

    const { messages , refreshMessages }  = useContext(MessageContext)
    const notifications = data.notifications

    // Any component under BrowserRouter can access useNavigate
    const navigate = useNavigate()

    return (
        <div>
            <button onClick={() => {
                navigate('/')
            }}> Home </button>
            <button onClick={() => {
                navigate('/messages')
            }}> Messages({messages.length}) </button>
            <button onClick={() => {
                navigate('/notifications')
            }}> Notifications({notifications.length}) </button>
        </div>
    )
} 

export default TopBarComponent