import { memo, useState } from 'react';

const GreetingSelector = ({ value, onChange }) => {

    console.log("Greeting was rendered from GreetingSelector at", new Date().toLocaleTimeString());

    return (
        <div>
            <label>
                <input
                type="radio"
                checked={value === 'Hola'}
                onChange={e => onChange('Hola')}
                />
                Regular greeting
            </label>
            <label>
                <input
                type="radio"
                checked={value === 'Hola y bienvenido'}
                onChange={e => onChange('Hola y bienvenido')}
                />
                Enthusiastic greeting
            </label>

        </div>
    )

}

export default memo(GreetingSelector);