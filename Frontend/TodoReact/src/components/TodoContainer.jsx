function TodoContainer (props) {

    const todos =  props.data
    console.log('TodoContainer component rerendered')

    return (<div>
        {todos.map((todo, index) => {
            return <div id={index} style={{ padding : 2, border: '1px solid white' }}><h1>{todo.title} : {todo.description}</h1></div>
            })
        }
    </div>)
}

export default TodoContainer