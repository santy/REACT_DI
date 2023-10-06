import { memo, useState } from 'react';
import GreetingSelector from './GreetingSelector';

const Greeting = ({name}) => {
    console.log("Greeting was rendered at", new Date().toLocaleTimeString());

    const [greeting, setGreeting] = useState('Hola');

    return (
    <div>
        <h3>{greeting}{name && ', '}{name}!</h3>
        <GreetingSelector value={greeting} onChange={setGreeting} />
    </div>
    
    );
}

//export default Greeting;
export default Greeting;