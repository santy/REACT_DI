import { useState, useEffect } from 'react';


  const Timeout = () => {
    const [count, setCount] = useState(0);


      

    useEffect(() => {
        const interval = setInterval(function () {
          console.log('Hello from Codedamn!');
        }, 1000);
    
        return () => {
          clearInterval(interval);
          console.log('adios');
        };
      }, [count]);
  
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>
          Increase count: {count}
        </button>
      </div>
    );
  }

  export default  Timeout;