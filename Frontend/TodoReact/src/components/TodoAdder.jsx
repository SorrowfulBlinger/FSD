import { useState } from "react"

function TodoAdder(props) {

    const [title, setTitle] =  useState('')
    const [description, setDescription] =  useState('')
    
    function addTodo(props) {
        console.log('Adding Todo from AddTodoContainer') 
        props.addTodo({
            'title' : title,
            'description' : description
        })
    }
    
    console.log('TodoAdder component rerendered')

    return (
        <div style={{ padding : 40, border: '1px solid white' }}>
            <input style={{ padding : 20, border: '1px solid white' }} placeholder='Title' onChange={(e) => {
                setTitle(e.target.value)
            }}></input> <br/>
            <input style={{ padding : 20, border: '1px solid white' }} placeholder='Description' onChange={(e)=>{
                setDescription(e.target.value)
            }}></input><br/><br/>
            <button style={{ padding : 20, border: '1px solid white' }} onClick = {() => {addTodo(props)}}> Add Todo</button>
        </div>
    )
}

export default TodoAdder