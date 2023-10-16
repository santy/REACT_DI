import { useState } from 'react';
import InputTodo from './InputTodo';
import ListTodo from './ListTodo';

const Todo = () => {

    const [todos, addTodos] = useState(["Todo1","Todo2"]);
    const [value, setValue] = useState("");

    function saveValue(event) {
        setValue(event.target.value)
    }

    function addList(){
        addTodos([...todos, value])
    }

    return (
        <div>
            <InputTodo ChangeInput={saveValue} Value={value} ClickButton={addList}/>
            <ListTodo Todos={todos} setTodos={addTodos}/>
        </div>
    )
}


export default Todo;