import {useState, useEffect, useCallback} from 'react'


function Callback(){
    const [input, setInput]=useState("Input Value")
    const [word, setWord]=useState("Primer Word")
    const [count, setCount]=useState(0);

    //Comprobar que se llama en cada renderizado
    //const say = ()=>console.log(`Sin Callback llamo en cada renderizado: ${input} ${count} `); //Comprobar que se llama en cada renderizado
    
    //useCallback mantiene la función en cada renderizado mientras no cambie la variable word
    const say = useCallback( ()=>console.log(`Con Callback solo llamo si cambia word: ${word} ${count}`) , [word]); //comprobar que ya no se llama en cada renderizado
    
    function changeInput(event){
        setInput(event.target.value);
    }

    useEffect(()=>{
        say()
    },[say]) //llamamos a useEffect en cada cambio de la función say()

    return (
        <div>
            Welcome! {count}
            <br />
            <input type="text" onChange={changeInput}/>
            <button onClick={() => (setCount(count + 1))}>Incrementar Counter</button>
            <button onClick={() => (setWord(input))}>Modificar valor Input</button>
            
        </div>
        
        );

}

export default Callback;

