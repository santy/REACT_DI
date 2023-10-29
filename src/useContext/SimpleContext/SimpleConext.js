import React, { useState } from 'react';
import Display from './Display';
import NumberContext from './NumContext';


function SimpleContext() {

  const [number, setNumber] = useState(0);

  return (
    <div>
      <button onClick={()=>(setNumber(number + 1))}>Incrementar</button>
      <NumberContext.Provider value={{number, setNumber}}>
        <div>
          <Display />
        </div>
      </NumberContext.Provider>
    </div>
  )
}


export default SimpleContext



