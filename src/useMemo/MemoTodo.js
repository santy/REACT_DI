import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./MemoTodo/Todos";

const MemoTodo = () => {
  
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);


  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
    
      
    </>
  );
};

export default MemoTodo;