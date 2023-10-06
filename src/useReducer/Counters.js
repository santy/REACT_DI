import { useReducer, useState } from 'react';


const reducer = (state, action) => {

    if(action.type === 'increment'){
        return state+1;
    }

    if(action.type === 'decrement'){
        return state+-1;
    }

    if(action.type === 'reset'){
        return 0;
    }

    return state //imoprtante mencionar que si no encuentra nada no del if debe devolver el estado anterior

    
}

const Counters = () => {

    const [countstate, setCountstate] = useState(1);
    const[count, dispatch] = useReducer(reducer, 0);


    return (

        <div>
            <p>Counter: {count}</p>
            <button onClick={()=> setCountstate(c => c +1)}></button>
            <button onClick={ () => dispatch({type: 'increment'})}>Incrementar</button>
            <button onClick={ () => dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={ () => dispatch({type: 'reset'})}>Reset</button>


        </div>
    )

};

export default Counters;