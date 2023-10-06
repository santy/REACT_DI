import { useState } from 'react';
import Sumar from './Calculator/Sumar';


const Calculator = () => {

    const [first, setFirst] = useState("")
    const [second, setSecond] = useState("");
    const [total, setTotal] = useState("");

    function calculateTotal() {
        setTotal(first + second);
      }


    return (

        <div>

            <input type="number" onChange={(e) => setFirst(+e.target.value)}></input>
            <input type="number" onChange={(e) => setSecond(+e.target.value)}></input>
            <button onClick={calculateTotal} Total={total}>Sumar</button>
            
            <Sumar Total={total}/>
            
        </div>
    )
}



export default Calculator;