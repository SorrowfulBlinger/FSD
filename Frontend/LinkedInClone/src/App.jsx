import { useCallback, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { lazy , Suspense, React } from 'react'
import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import MessageContext  from './../context/messages'
import NotificationsContext from '../components/notifications'

//import TopBarComponent from './../components/topbar'
//import HomepageComponent from '../components/homepage'
//import MessagingComponent from '../components/messaging'
//import NotificationsComponent from '../components/notifications'

// Lazy load when needed
const HomepageComponent = lazy(() => import('../components/homepage'))
const MessagingComponent = lazy(() => import('../components/messaging'))
const NotificationsComponent = lazy(() => import('../components/notifications'))
const TopBarComponent = lazy(() => import('../components/topbar'))
const LoaderComponent = lazy(() => import('../components/loader'))

// React Dev tools 
function App() {

  function generateRandomMsgs() {
    const num = Number (Math.random() * 10)
    const messages = []
    for (let i=0; i<num; i++ ){
        messages.push({
          'id' : i,
          'message': 'Hello' + i,
          'sender' : 'Sender'+ i
        })
    }
    console.log('generate msgs1 : \n' + JSON.stringify(messages))
    return messages
  }

  function generateRandomNotifications() {
    const num = Number (Math.random() * 10)
    const notifications = []
    for (let i=0; i<num; i++ ){
      notifications.push({
          'id' : i,
          'notification': 'Post' + i,
          'sender' : 'Sender'+ i
        })
    }
    console.log('generate notification1 : \n' + JSON.stringify(notifications))
    return notifications
  }

  const refreshMessagesFn = useCallback(() => {
    setRefreshMessages((refMsg) => {
      return refMsg + 1
    })
  },[])

  const refreshNotificationsFn = useCallback(() => {
    setRefreshNotifications((ref) => {
      return ref + 1
    })
  },[])

  //Since App is LCA of TopBar and Messages component lets keep messages state var here
  const [messages, setMessages] = useState([])
  const [refreshMessages, setRefreshMessages] = useState(0)
  
  //useMemo, useNavigate, useRef, useEffect, useCallback
  useEffect(() => {
    const m  = generateRandomMsgs()
    console.log('generate msgs0 : \n' + JSON.stringify(m))
    setMessages(m)
    console.log('generate msgs2 : \n' + JSON.stringify(messages))
  },[,refreshMessages])
  
  //Since App is LCA of TopBar and Notifications component lets keep notifications state var here
  const [notifications, setNotifications] =  useState([])
  const [refreshNotifications, setRefreshNotifications] = useState(0)
  useEffect(() => {
    setNotifications(generateRandomNotifications())
  },[,refreshNotifications])


//    <NotificationsContext.Provider value={{ notifications, refreshNotificationsFn }}>
//    </NotificationsContext.Provider>

  return (
    <BrowserRouter>
    <MessageContext.Provider value={{ messages, refreshMessages: () => { refreshMessagesFn()} }}>
    <TopBarComponent data={{messages, notifications}}></TopBarComponent>
    <Routes>
      <Route path= '/' element={<Suspense fallback={<LoaderComponent/>}><HomepageComponent/></Suspense>}/>
      <Route path= '/messages' element={<Suspense fallback={<LoaderComponent/>}><MessagingComponent/></Suspense>}/>
      <Route path= '/notifications' element={<Suspense fallback={<LoaderComponent/>}>
        <NotificationsComponent data={{ notifications:notifications , refresh: () => { refreshNotificationsFn()} }}/>
        </Suspense>}/>
    </Routes>
    </MessageContext.Provider>
    </BrowserRouter>
  )
}

export default App
