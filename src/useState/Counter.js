import { useState } from 'react'; 

function Counter() {
    const [counter, setCounter] = useState(0);
    function incrementCounterHandler() {
      setCounter(prevCounter => prevCounter + 1);
    };
 
    return (
      <>
        <p>Counter Value: {counter}</p>
        <button onClick={incrementCounterHandler}>Increment</button>
      </>
    );
  };
  export default Counter;