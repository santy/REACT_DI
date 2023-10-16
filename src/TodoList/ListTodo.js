const ListTodo = ({Todos, setTodos}) => {
    return (
        <div>
          <ul>
            {Todos.map(todo =>
              <li key={todo} className={todo}>
              {todo}
              <button onClick={() => {
                let index = Todos.indexOf(todo)
                Todos.splice(index, 1) //At position index, remove n=1 items
                setTodos([...Todos])
              }}>
              Eliminar</button>
          </li>
      )}
        </ul>
       </div>
    )
}

export default ListTodo;