import { useEffect } from 'react'
import './App.css'
import { useBackendFetch } from './hooks/getFromBackend'
import { BackendData } from './types/backendDataType'

function App() {
  console.log('App rerendering')
  let data:BackendData = useBackendFetch()
  
  useEffect(()=>{
    console.log('got new data to app');
  },[data])
  
  return (
    <div>{data.loading? 'Loading' : 'Got data from '+ data.data}</div>
  )
}

export default App
