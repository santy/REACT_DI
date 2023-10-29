import React, { useContext } from 'react'
import NumberContext from './NumContext'

function Display() {

const number = useContext(NumberContext);

  return (
    <div>Valor: {number.number}
    <br />
    <button onClick={()=>(number.setNumber(number.number + 1))}>Incrementar desde Display</button>
    </div>
  )
}

export default Display