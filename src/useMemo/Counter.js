import { useState } from "react";

const Counter = () => {

    const [counter, setCounter] = useState(0);
    const [showCounter, setShowCounter] = useState(false);
    function incCounterHandler() {
      setCounter((prevCounter) => prevCounter + 1);
      if (!showCounter) {
        setShowCounter(true);
      }
  
    }

    return (
        <div>
            <p>Click to increment + show or hide the counter</p>
            <button onClick={incCounterHandler}>Increment</button>
            {showCounter && <p>Counter: {counter}</p>}
        </div>
    )


}



export default Counter;