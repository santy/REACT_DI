export function createTodos() {
    const todos = [];
    for (let i = 0; i < 50; i++) {
      todos.push({
        id: i,
        text: "Todo " + (i + 1),
        completed: Math.random() > 0.5
      });
    }
    return todos;
  }
  
  export function filterTodos(todos, tab) {
    console.log('[ARTIFICIALLY SLOW] Filtering ' + todos.length + ' todos for "' + tab + '" tab.');
    let startTime = performance.now();
    while (performance.now() - startTime < 1000) {
      // No hacer nada durante 500 ms para emular un código extremadamente lento
    }
  
    return todos.filter(todo => {
      if (tab === 'all') {
        return true;
      } else if (tab === 'active') {
        return !todo.completed;
      } else if (tab === 'completed') {
        return todo.completed;
      }
    });
  }