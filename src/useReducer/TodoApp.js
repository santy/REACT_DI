import React, { useReducer, useState } from 'react'

const types = {
    add :   'add',
    delete: 'delete'
}

const initialTodos = [
    { id: 1, title: "Todo 1"},
    { id: 2, title: "Todo 2"}
]


const reducer = (state, action) =>{
    switch(action.type){

        case types.delete:
            return state.filter(todo => todo.id !== action.payload)

        case types.add:
            return [...state, action.payload]    

        default:
            return state;
    }

}
 
const TodoApp = () => {

    const [todos, dispatch] = useReducer(reducer, initialTodos);
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = { id: Date.now(), title: text}

        dispatch({ 
                type: types.add,
                payload: newTodo
            }) 
    }


    return (
        <div>
            <h2>TodoApp</h2>
            <ul>
                {todos.map(todo => (
                        <li key={todo.id}>
                            {todo.title}
                            <button onClick={ ()=> { dispatch({
                                type: types.delete,
                                payload: todo.id
                                
                            })}}>Delete</button>
                        </li>

                    ))}
            
            </ul>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Todo"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            </form>
        </div>
    )
}

export default TodoApp