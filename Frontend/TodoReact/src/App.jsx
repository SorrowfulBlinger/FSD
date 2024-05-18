import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoContainer from './components/TodoContainer'
import TodoAdder from './components/TodoAdder'

function App() {
  const [todos, setTodos] = useState([ 
    {
      'title' : 'Go for a walk',
      'description' : 'Be healthy'
    },
    {
      'title' : 'Go for a run',
      'description' : 'Be healthy max'
    }
  ])

  function getAddedTodo(todo) {
    setTodos([...todos, todo])
    console.log('Added todos from App')
  }

  console.log('App component rerendered')

  return (
    <div>
      <TodoAdder data={todos} addTodo={getAddedTodo}></TodoAdder>
      <TodoContainer data={todos}></TodoContainer>
    </div>
  )
}

export default App
