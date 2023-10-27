import {useState, useEffect, useCallback} from 'react'


function Callback(){
    const [word,setWord]=useState("Primer Renderizado")
    const [count, setCount]=useState(0);

    //Comprobar que se llama en cada renderizado
    //const say = ()=>console.log(`Your word is: ${word} ${count} `); //Comprobar que se llama en cada renderizado
    
    //useCallback mantiene la función en cada renderizado mientras no cambie la variable word
    const say = useCallback( ()=>console.log(`Your word is: ${word} ${count}`) , [word]); //comprobar que ya no se llama en cada renderizado
    

    useEffect(()=>{
        say()
    },[say]) //llamamos a useEffect en cada cambio de la función say()

    return (
        <div>
            Welcome! {count}
            <br />
            <button onClick={() => (setCount(count + 1))}>Incrementar Counter</button>
            <button onClick={() => (setWord("Segundo Renderizado"))}>Modificar Word</button>
            
        </div>
        
        );

}

export default Callback;

