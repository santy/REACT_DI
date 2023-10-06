import { useEffect } from 'react';

const SimpleComponent = () => {

    console.log("TEXTO");

    useEffect( () => console.log("text")

    )

    const simple = () => {
        console.log("texto");
    }
  return (
    <div><button onClick={simple}>text</button></div>
  )
}

export default SimpleComponent